import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grbs_c4kf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grbs_c4kf"/>`,
		"fallback": "hugeicons:solid-line-02",
	});
}

export default Component;
