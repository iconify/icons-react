import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnd69mb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnd69mb4b"/>`,
		"fallback": "thesvg-color:shanghai-metro",
	});
}

export default Component;
