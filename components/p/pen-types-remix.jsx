import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv55i0bns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gv55i0bns"/>`,
		"fallback": "streamline-sharp:pen-types-remix",
	});
}

export default Component;
