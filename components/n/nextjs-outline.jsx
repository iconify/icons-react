import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khr67rxkz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khr67rxkz"/>`,
		"fallback": "teenyicons:nextjs-outline",
	});
}

export default Component;
