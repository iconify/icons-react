import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aerf2dljn.css';
import '../../css/p/p27qq8biq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aerf2dljn"/><path class="p27qq8biq"/>`,
		"fallback": "ooui:page-settings",
	});
}

export default Component;
