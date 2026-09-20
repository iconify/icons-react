import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyx1q5bsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyx1q5bsv"/>`,
		"fallback": "simple-icons:pexels",
	});
}

export default Component;
