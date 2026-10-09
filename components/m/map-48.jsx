import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veqbv0b0t.css';
import '../../css/a/agesaqbzs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veqbv0b0t"/><path class="agesaqbzs"/>`,
		"fallback": "energy-icons:map-48",
	});
}

export default Component;
