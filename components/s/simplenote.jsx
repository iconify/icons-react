import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcxg88ycr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcxg88ycr"/>`,
		"fallback": "simple-icons:simplenote",
	});
}

export default Component;
