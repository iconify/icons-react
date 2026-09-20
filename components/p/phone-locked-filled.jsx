import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1arq4b0h.css';
import '../../css/w/wo_8mcpow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1arq4b0h"/><path class="wo_8mcpow"/>`,
		"fallback": "tdesign:phone-locked-filled",
	});
}

export default Component;
