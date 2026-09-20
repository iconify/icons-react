import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk1ji3fyx.css';
import '../../css/v/v4puv_b2i.css';
import '../../css/i/iwp2c6aew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sk1ji3fyx"/><path class="v4puv_b2i"/><path clip-rule="evenodd" class="iwp2c6aew"/>`,
		"fallback": "stash:sliders-h-duotone",
	});
}

export default Component;
