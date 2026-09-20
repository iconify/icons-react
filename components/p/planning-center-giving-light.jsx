import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwlpqbqmf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwlpqbqmf"/>`,
		"fallback": "selfhst:planning-center-giving-light",
	});
}

export default Component;
