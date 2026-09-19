import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktp18214b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ktp18214b"/>`,
		"fallback": "healthicons:low-vision-24px",
	});
}

export default Component;
