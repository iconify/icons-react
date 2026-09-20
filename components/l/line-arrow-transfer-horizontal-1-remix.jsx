import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcc5x3bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bcc5x3bzy"/>`,
		"fallback": "streamline-sharp:line-arrow-transfer-horizontal-1-remix",
	});
}

export default Component;
