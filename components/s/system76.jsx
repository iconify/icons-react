import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsoe1tbtj.css';
import '../../css/e/eht21_1kr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsoe1tbtj"/><path class="eht21_1kr"/>`,
		"fallback": "selfhst:system76",
	});
}

export default Component;
