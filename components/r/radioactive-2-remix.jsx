import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9v3s6lts.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q9v3s6lts"/>`,
		"fallback": "streamline:radioactive-2-remix",
	});
}

export default Component;
