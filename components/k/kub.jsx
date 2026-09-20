import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky3n2u_io.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky3n2u_io"/>`,
		"fallback": "token:kub",
	});
}

export default Component;
