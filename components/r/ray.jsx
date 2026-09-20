import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psgtoi7vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psgtoi7vi"/>`,
		"fallback": "simple-icons:ray",
	});
}

export default Component;
