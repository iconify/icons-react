import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrevxgb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wrevxgb5n"/>`,
		"fallback": "streamline-sharp:voice-mail-solid",
	});
}

export default Component;
