import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u2ukdzbzh.css';
import '../../css/y/yommb2bng.css';
import '../../css/t/tad07ubdq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u2ukdzbzh"/><path class="yommb2bng"/><path class="tad07ubdq"/></g>`,
		"fallback": "streamline-flex:virus-antivirus",
	});
}

export default Component;
