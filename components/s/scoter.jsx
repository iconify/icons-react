import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyuwcobdj.css';
import '../../css/n/n6xp_z95z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cyuwcobdj"/><path class="n6xp_z95z"/>`,
		"fallback": "lineicons:scoter",
	});
}

export default Component;
