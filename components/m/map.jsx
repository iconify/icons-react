import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nct5t0b9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nct5t0b9m"/>`,
		"fallback": "vadivam:map",
	});
}

export default Component;
