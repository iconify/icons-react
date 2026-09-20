import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bihk4mb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bihk4mb5f"/>`,
		"fallback": "ri:login-box-line",
	});
}

export default Component;
