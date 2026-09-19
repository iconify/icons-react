import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6wz8cb3t.css';
import '../../css/h/h6w9bvqsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="t6wz8cb3t"/><path class="h6w9bvqsk"/>`,
		"fallback": "eva:settings-2-fill",
	});
}

export default Component;
