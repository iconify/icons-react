import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djl73n95t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djl73n95t"/>`,
		"fallback": "iconaut:tea-solid",
	});
}

export default Component;
