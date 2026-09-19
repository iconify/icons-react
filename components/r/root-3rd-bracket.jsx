import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s9fynmwrw.css';
import '../../css/z/ztw77h30a.css';
import '../../css/w/ws3epobig.css';
import '../../css/x/xkxxr0bfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s9fynmwrw"/><path class="ztw77h30a"/><path class="ws3epobig"/><path class="xkxxr0bfj"/></g>`,
		"fallback": "hugeicons:root-3rd-bracket",
	});
}

export default Component;
