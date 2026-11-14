import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecpwv1b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecpwv1b6f"/>`,
		"fallback": "hugeicons:thumbs-up",
	});
}

export default Component;
