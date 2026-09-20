import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agekg5jjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agekg5jjw"/>`,
		"fallback": "simple-icons:steamdb",
	});
}

export default Component;
