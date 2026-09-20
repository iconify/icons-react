import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar9miut_s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar9miut_s"/>`,
		"fallback": "sidekickicons:triangle-20-solid",
	});
}

export default Component;
