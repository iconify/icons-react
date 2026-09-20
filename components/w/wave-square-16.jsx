import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms14et43n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms14et43n"/>`,
		"fallback": "qlementine-icons:wave-square-16",
	});
}

export default Component;
