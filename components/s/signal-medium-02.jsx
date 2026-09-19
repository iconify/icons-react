import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6f32gbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6f32gbni"/>`,
		"fallback": "hugeicons:signal-medium-02",
	});
}

export default Component;
