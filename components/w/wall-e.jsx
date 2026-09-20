import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i584vobxs.css';
import '../../css/g/gt428sznn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="i584vobxs"/><path class="gt428sznn"/></g>`,
		"fallback": "streamline-cyber:wall-e",
	});
}

export default Component;
