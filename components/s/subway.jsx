import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do3r89v-g.css';

const viewBox = {"width":18,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do3r89v-g"/>`,
		"fallback": "fontisto:subway",
	});
}

export default Component;
