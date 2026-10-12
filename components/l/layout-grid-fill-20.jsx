import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z387mc50s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z387mc50s"/>`,
		"fallback": "garden:layout-grid-fill-20",
	});
}

export default Component;
