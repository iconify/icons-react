import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zivg1ubor.css';
import '../../css/o/o9unsp-hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zivg1ubor"/><path clip-rule="evenodd" class="o9unsp-hx"/>`,
		"fallback": "si:monitor-down-fill",
	});
}

export default Component;
