import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pej5vegmf.css';
import '../../css/s/sqh-tvbfl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pej5vegmf"/><path class="sqh-tvbfl"/>`,
		"fallback": "carbon:mobile-crash",
	});
}

export default Component;
