import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okzgdh2-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okzgdh2-r"/>`,
		"fallback": "vadivam:layer-arrow-down",
	});
}

export default Component;
