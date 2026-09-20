import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzxv1fboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzxv1fboe"/>`,
		"fallback": "tdesign:logo-cnb",
	});
}

export default Component;
