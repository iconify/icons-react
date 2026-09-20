import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yktk2bixn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yktk2bixn"/>`,
		"fallback": "streamline-flex:voice-activation-check-validate",
	});
}

export default Component;
