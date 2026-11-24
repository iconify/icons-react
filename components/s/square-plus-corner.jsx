import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0fjt0b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0fjt0b4j"/>`,
		"fallback": "lucide:square-plus-corner",
	});
}

export default Component;
