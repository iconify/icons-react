import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wor_cd2ux.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wor_cd2ux"/>`,
		"fallback": "streamline-plump:voice-typing-word-convert-remix",
	});
}

export default Component;
