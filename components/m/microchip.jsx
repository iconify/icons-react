import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kynv3_bes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kynv3_bes"/>`,
		"fallback": "vadivam:microchip",
	});
}

export default Component;
