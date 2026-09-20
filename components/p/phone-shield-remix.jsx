import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm7fwux2e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cm7fwux2e"/>`,
		"fallback": "streamline-flex:phone-shield-remix",
	});
}

export default Component;
