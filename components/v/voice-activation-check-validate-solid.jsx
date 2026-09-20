import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu-5xmb5v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pu-5xmb5v"/>`,
		"fallback": "streamline-flex:voice-activation-check-validate-solid",
	});
}

export default Component;
