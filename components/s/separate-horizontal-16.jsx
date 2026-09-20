import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml63hhbka.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml63hhbka"/>`,
		"fallback": "qlementine-icons:separate-horizontal-16",
	});
}

export default Component;
