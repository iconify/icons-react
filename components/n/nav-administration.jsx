import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-da5wbxh.css';
import '../../css/h/h1p0vrb0a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n-da5wbxh"/><path clip-rule="evenodd" class="h1p0vrb0a"/>`,
		"fallback": "oui:nav-administration",
	});
}

export default Component;
