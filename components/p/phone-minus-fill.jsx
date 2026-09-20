import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zamd5-oru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zamd5-oru"/>`,
		"fallback": "mage:phone-minus-fill",
	});
}

export default Component;
