import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpf_srb-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpf_srb-f"/>`,
		"fallback": "game-icons:sly",
	});
}

export default Component;
