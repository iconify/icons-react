import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf94p7bjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf94p7bjm"/>`,
		"fallback": "hugeicons:shaka-02",
	});
}

export default Component;
