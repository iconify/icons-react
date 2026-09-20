import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xjb-strbf.css';
import '../../css/l/l3svlmgau.css';
import '../../css/o/oksw6zbjt.css';
import '../../css/k/kmbccudpf.css';
import '../../css/j/jda-zrwis.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xjb-strbf"/><path class="l3svlmgau"/><path class="oksw6zbjt"/><path class="kmbccudpf"/><path class="jda-zrwis"/></g>`,
		"fallback": "streamline-color:pork-meat",
	});
}

export default Component;
