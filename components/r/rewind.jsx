import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imie70-7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imie70-7v"/>`,
		"fallback": "heroicons-outline:rewind",
	});
}

export default Component;
