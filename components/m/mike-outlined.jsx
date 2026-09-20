import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apxrc4blx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apxrc4blx"/>`,
		"fallback": "weui:mike-outlined",
	});
}

export default Component;
