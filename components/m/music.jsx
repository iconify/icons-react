import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq8qcye-d.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq8qcye-d"/>`,
		"fallback": "lineicons:music",
	});
}

export default Component;
