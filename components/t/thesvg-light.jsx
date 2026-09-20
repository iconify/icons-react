import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abcsioblf.css';
import '../../css/u/uc8haducx.css';
import '../../css/e/e01ksbcky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="abcsioblf"><path class="uc8haducx"/><path class="e01ksbcky"/></g>`,
		"fallback": "thesvg-color:thesvg-light",
	});
}

export default Component;
