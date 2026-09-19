import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rij442pdg.css';
import '../../css/m/mbirz4byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rij442pdg"/><path class="mbirz4byx"/>`,
		"fallback": "circum:square-plus",
	});
}

export default Component;
