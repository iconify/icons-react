import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhcj01g8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yhcj01g8f"/>`,
		"fallback": "streamline-sharp:strategy-tasks-solid",
	});
}

export default Component;
