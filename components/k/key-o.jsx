import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eurq1d2or.css';
import '../../css/t/tav9lxblw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eurq1d2or"/><path class="tav9lxblw"/>`,
		"fallback": "vaadin:key-o",
	});
}

export default Component;
