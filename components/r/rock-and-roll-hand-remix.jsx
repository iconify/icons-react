import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs6f84htr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gs6f84htr"/>`,
		"fallback": "streamline-sharp:rock-and-roll-hand-remix",
	});
}

export default Component;
