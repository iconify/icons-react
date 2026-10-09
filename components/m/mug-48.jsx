import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4kijcj5b.css';
import '../../css/t/tea15-vcx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4kijcj5b"/><path class="tea15-vcx"/>`,
		"fallback": "energy-icons:mug-48",
	});
}

export default Component;
