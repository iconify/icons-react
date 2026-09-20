import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os9ln895c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="os9ln895c"/>`,
		"fallback": "streamline-sharp:steps-number-remix",
	});
}

export default Component;
