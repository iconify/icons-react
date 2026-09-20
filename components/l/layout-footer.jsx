import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpei1abib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpei1abib"/>`,
		"fallback": "pixelarticons:layout-footer",
	});
}

export default Component;
