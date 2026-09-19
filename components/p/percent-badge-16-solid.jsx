import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1k4kbnz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iw1k4kbnz"/>`,
		"fallback": "heroicons:percent-badge-16-solid",
	});
}

export default Component;
