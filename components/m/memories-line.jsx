import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bay1nz_kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bay1nz_kn"/>`,
		"fallback": "ri:memories-line",
	});
}

export default Component;
