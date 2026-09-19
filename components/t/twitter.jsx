import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzbsxqb0s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzbsxqb0s"/>`,
		"fallback": "icomoon-free:twitter",
	});
}

export default Component;
