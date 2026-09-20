import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3p4ryo0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3p4ryo0f"/>`,
		"fallback": "ri:layout-left-line",
	});
}

export default Component;
