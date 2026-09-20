import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7n3b9bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e7n3b9bth"/>`,
		"fallback": "streamline-sharp:record-player-solid",
	});
}

export default Component;
