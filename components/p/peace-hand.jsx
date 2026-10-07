import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mkv2mkbph.css';
import '../../css/k/k61wbkcxn.css';
import '../../css/v/v6weoe5py.css';
import '../../css/l/li0l3_rxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mkv2mkbph"/><path class="k61wbkcxn"/><path class="v6weoe5py"/><path class="li0l3_rxa"/></g>`,
		"fallback": "iconoir:peace-hand",
	});
}

export default Component;
