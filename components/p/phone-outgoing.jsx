import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v42ex0_-k.css';
import '../../css/e/epcgjnb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v42ex0_-k"/><path class="epcgjnb0x"/>`,
		"fallback": "boxicons:phone-outgoing",
	});
}

export default Component;
