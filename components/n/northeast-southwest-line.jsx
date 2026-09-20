import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjph9dmcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjph9dmcj"/>`,
		"fallback": "si:northeast-southwest-line",
	});
}

export default Component;
