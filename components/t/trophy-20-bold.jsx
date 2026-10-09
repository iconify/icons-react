import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-0zjwbkw.css';
import '../../css/a/a1clh2bdx.css';
import '../../css/n/nzfznobps.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-0zjwbkw"/><path class="a1clh2bdx"/><path class="nzfznobps"/>`,
		"fallback": "energy-icons:trophy-20-bold",
	});
}

export default Component;
