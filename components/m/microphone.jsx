import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrms1vniq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrms1vniq"/>`,
		"fallback": "heroicons:microphone",
	});
}

export default Component;
