import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbr48rber.css';
import '../../css/n/neglx700n.css';
import '../../css/r/raaz8qbsm.css';
import '../../css/v/vueepbcbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbr48rber"/><path class="neglx700n"/><path class="raaz8qbsm"/><path class="vueepbcbv"/>`,
		"fallback": "eos-icons:volume-binding-outlined",
	});
}

export default Component;
