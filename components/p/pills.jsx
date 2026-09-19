import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt3uzf15z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt3uzf15z"/>`,
		"fallback": "carbon:pills",
	});
}

export default Component;
