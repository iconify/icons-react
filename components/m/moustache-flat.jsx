import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrax7kfye.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrax7kfye"/>`,
		"fallback": "streamline-color:moustache-flat",
	});
}

export default Component;
