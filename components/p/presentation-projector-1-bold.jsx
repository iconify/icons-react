import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6b1jqbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6b1jqbkg"/>`,
		"fallback": "streamline-ultimate:presentation-projector-1-bold",
	});
}

export default Component;
