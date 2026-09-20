import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smezn0u9l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="smezn0u9l"/>`,
		"fallback": "streamline:justice-hammer-remix",
	});
}

export default Component;
