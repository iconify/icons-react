import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmo20pbao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmo20pbao"/>`,
		"fallback": "iconoir:small-lamp",
	});
}

export default Component;
