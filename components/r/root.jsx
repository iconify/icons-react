import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqw6wkb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqw6wkb5g"/>`,
		"fallback": "simple-icons:root",
	});
}

export default Component;
