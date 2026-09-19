import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/h/hue8_ac7h.css';
import '../../css/e/edk7b4b6l.css';
import '../../css/q/qrlbkodzq.css';
import '../../css/y/yhlb3kzkn.css';
import '../../css/o/o6fhmkbcm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="hue8_ac7h"/><path class="edk7b4b6l"/><path class="qrlbkodzq"/><path class="yhlb3kzkn"/><path class="o6fhmkbcm"/></g>`,
		"fallback": "icon-park:topic-discussion",
	});
}

export default Component;
