import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ro3entbmx.css';
import '../../css/j/jv3v06bbc.css';
import '../../css/m/m-u0yfdqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ro3entbmx"/><path class="jv3v06bbc"/><path class="m-u0yfdqf"/></g>`,
		"fallback": "akar-icons:statistic-up",
	});
}

export default Component;
