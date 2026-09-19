import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3k6s3b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3k6s3b4d"/>`,
		"fallback": "hugeicons:pdf-01",
	});
}

export default Component;
