import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx7cgobta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx7cgobta"/>`,
		"fallback": "vadivam:waves-arrow-down",
	});
}

export default Component;
