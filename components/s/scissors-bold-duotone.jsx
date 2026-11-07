import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtjjt6bok.css';
import '../../css/v/v-e0rbmkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtjjt6bok"/><path class="v-e0rbmkv"/>`,
		"fallback": "solar:scissors-bold-duotone",
	});
}

export default Component;
