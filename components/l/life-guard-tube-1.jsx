import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coy96zbms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coy96zbms"/>`,
		"fallback": "lineicons:life-guard-tube-1",
	});
}

export default Component;
