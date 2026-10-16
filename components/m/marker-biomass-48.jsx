import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9v855hut.css';
import '../../css/f/f8ufb-bbb.css';
import '../../css/g/gb1zcob1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9v855hut"/><path class="f8ufb-bbb"/><path class="gb1zcob1n"/>`,
		"fallback": "energy-icons:marker-biomass-48",
	});
}

export default Component;
