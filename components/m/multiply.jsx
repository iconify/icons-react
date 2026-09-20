import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/necj-qrta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="necj-qrta"/>`,
		"fallback": "uit:multiply",
	});
}

export default Component;
