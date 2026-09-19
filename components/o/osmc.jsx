import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kos593b4w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kos593b4w"/>`,
		"fallback": "cib:osmc",
	});
}

export default Component;
