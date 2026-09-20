import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqecm5lrh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqecm5lrh"/>`,
		"fallback": "teenyicons:watch-outline",
	});
}

export default Component;
