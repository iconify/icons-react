import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v98sy1bgv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v98sy1bgv"/>`,
		"fallback": "streamline-flex:voice-mail-remix",
	});
}

export default Component;
