import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo2s3r1kx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo2s3r1kx"/>`,
		"fallback": "mingcute:sleigh-line",
	});
}

export default Component;
