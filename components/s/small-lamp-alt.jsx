import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqh79mb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqh79mb6g"/>`,
		"fallback": "iconoir:small-lamp-alt",
	});
}

export default Component;
