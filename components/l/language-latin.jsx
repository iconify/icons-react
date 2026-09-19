import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecsl_f_4p.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecsl_f_4p"/>`,
		"fallback": "dinkie-icons:language-latin",
	});
}

export default Component;
