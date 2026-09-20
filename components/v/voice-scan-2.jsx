import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iympo7t3y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iympo7t3y"/>`,
		"fallback": "streamline-color:voice-scan-2",
	});
}

export default Component;
