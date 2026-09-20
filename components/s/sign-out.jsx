import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwj0gbbsy.css';
import '../../css/e/euo04dbov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwj0gbbsy"/><path class="euo04dbov"/>`,
		"fallback": "prime:sign-out",
	});
}

export default Component;
