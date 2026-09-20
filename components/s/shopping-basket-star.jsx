import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z4i4hwbzo.css';
import '../../css/h/ht1chgbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z4i4hwbzo"/><path class="ht1chgbmf"/></g>`,
		"fallback": "streamline-ultimate:shopping-basket-star",
	});
}

export default Component;
