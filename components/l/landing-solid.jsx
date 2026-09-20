import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q316_cceb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q316_cceb"/>`,
		"fallback": "streamline-sharp:landing-solid",
	});
}

export default Component;
