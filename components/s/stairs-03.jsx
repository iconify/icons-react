import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh4bwob4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh4bwob4f"/>`,
		"fallback": "hugeicons:stairs-03",
	});
}

export default Component;
