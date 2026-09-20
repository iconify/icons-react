import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfcb0sdvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mfcb0sdvp"/>`,
		"fallback": "reicon:phone-medical",
	});
}

export default Component;
