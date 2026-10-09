import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou9qj3bbh.css';
import '../../css/x/xnplzxg2w.css';
import '../../css/t/t5wu_mbwg.css';
import '../../css/y/ycml7-bwi.css';
import '../../css/x/xgy8okbsb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou9qj3bbh"/><path class="xnplzxg2w"/><path class="t5wu_mbwg"/><path class="ycml7-bwi"/><path class="xgy8okbsb"/>`,
		"fallback": "energy-icons:pulley-48-bold",
	});
}

export default Component;
