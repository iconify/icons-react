import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/swe-3q-nj.css';
import '../../css/b/bmhqaabml.css';
import '../../css/o/oi106ib4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="swe-3q-nj"/><path class="bmhqaabml"/><path class="oi106ib4v"/></g>`,
		"fallback": "streamline-ultimate:virtual-coin-crypto-namecoin",
	});
}

export default Component;
