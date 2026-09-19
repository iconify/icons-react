import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v0rzmlrzf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><polyline points="8.25 2.75 2.75 2.75 2.75 13.25 13.25 13.25 13.25 7.75"/><path class="v0rzmlrzf"/></g>`,
		"fallback": "charm:link-external",
	});
}

export default Component;
