import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpe77fbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpe77fbfx"/>`,
		"fallback": "keyline-icons:square-record",
	});
}

export default Component;
