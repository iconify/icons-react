import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuczs7xit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nuczs7xit"/>`,
		"fallback": "streamline-sharp:snooze-clock-remix",
	});
}

export default Component;
