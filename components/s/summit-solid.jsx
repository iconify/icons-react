import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4dvv9l9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q4dvv9l9p"/>`,
		"fallback": "streamline-sharp:summit-solid",
	});
}

export default Component;
