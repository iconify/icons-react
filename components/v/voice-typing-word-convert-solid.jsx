import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxoe_6bne.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dxoe_6bne"/>`,
		"fallback": "streamline-plump:voice-typing-word-convert-solid",
	});
}

export default Component;
