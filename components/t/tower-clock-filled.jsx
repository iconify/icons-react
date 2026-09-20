import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l37jp9bzw.css';
import '../../css/t/t54c4pnar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l37jp9bzw"/><path class="t54c4pnar"/>`,
		"fallback": "tdesign:tower-clock-filled",
	});
}

export default Component;
