import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tfmtz425a.css';
import '../../css/t/tm2l-nbzh.css';
import '../../css/k/kugbtdbkv.css';
import '../../css/l/l4nf9kbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tfmtz425a"/><path class="tm2l-nbzh"/><path class="kugbtdbkv"/><path class="l4nf9kbry"/></g>`,
		"fallback": "covid:quarantine-place-house-2",
	});
}

export default Component;
