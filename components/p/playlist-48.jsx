import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd9chqbvs.css';
import '../../css/j/jz9dkbbxs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd9chqbvs"/><path class="jz9dkbbxs"/>`,
		"fallback": "energy-icons:playlist-48",
	});
}

export default Component;
