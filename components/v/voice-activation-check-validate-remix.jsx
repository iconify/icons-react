import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg_564d1x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wg_564d1x"/>`,
		"fallback": "streamline-flex:voice-activation-check-validate-remix",
	});
}

export default Component;
