import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fa9kytbhl.css';
import '../../css/y/yzj6rlcfm.css';
import '../../css/m/mq4vbvbcj.css';
import '../../css/n/n2nnwldzh.css';
import '../../css/z/zp98dkbih.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fa9kytbhl"/><path class="yzj6rlcfm"/><path class="mq4vbvbcj"/><path class="n2nnwldzh"/><path class="zp98dkbih"/></g>`,
		"fallback": "streamline-color:politics-vote-2",
	});
}

export default Component;
