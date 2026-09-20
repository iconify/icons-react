import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i1xt-jlfv.css';
import '../../css/k/kzoz59axn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i1xt-jlfv"/><path class="kzoz59axn"/></g>`,
		"fallback": "streamline-ultimate:move-to-bottom",
	});
}

export default Component;
