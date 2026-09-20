import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k16uybc-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k16uybc-p"/>`,
		"fallback": "ri:mail-fill",
	});
}

export default Component;
