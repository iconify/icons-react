import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqaun74ep.css';
import '../../css/l/lqmbin3sl.css';
import '../../css/m/mp47fxbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqaun74ep"/><path clip-rule="evenodd" class="lqmbin3sl"/><path class="mp47fxbkb"/>`,
		"fallback": "lucide-extended:map-pin-pen-filled",
	});
}

export default Component;
