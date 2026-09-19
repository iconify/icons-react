import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpf0o4buc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpf0o4buc"/>`,
		"fallback": "ci:repeat",
	});
}

export default Component;
