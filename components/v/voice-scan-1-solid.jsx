import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp19n8hlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sp19n8hlf"/>`,
		"fallback": "streamline-sharp:voice-scan-1-solid",
	});
}

export default Component;
