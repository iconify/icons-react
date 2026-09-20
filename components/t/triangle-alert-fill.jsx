import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjlsc6boc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjlsc6boc"/>`,
		"fallback": "keyline-icons:triangle-alert-fill",
	});
}

export default Component;
