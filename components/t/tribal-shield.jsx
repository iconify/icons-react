import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr9yu5bwf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr9yu5bwf"/>`,
		"fallback": "game-icons:tribal-shield",
	});
}

export default Component;
