import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1_uyh1sv.css';
import '../../css/g/g2kbevgvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s1_uyh1sv"/><path class="g2kbevgvt"/>`,
		"fallback": "solar:laptop-outline",
	});
}

export default Component;
