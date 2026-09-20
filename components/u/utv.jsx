import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t34__wbdy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t34__wbdy"/>`,
		"fallback": "pinhead:utv",
	});
}

export default Component;
