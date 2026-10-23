import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij4z5606a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij4z5606a"/>`,
		"fallback": "vadivam:pen-off",
	});
}

export default Component;
