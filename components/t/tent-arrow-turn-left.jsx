import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbecybbdg.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbecybbdg"/>`,
		"fallback": "fa6-solid:tent-arrow-turn-left",
	});
}

export default Component;
