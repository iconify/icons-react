import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0z2e2bxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0z2e2bxj"/>`,
		"fallback": "simple-icons:wantedly",
	});
}

export default Component;
