import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igxsdr2uj.css';
import '../../css/o/oajmqbcrg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igxsdr2uj"/><path class="oajmqbcrg"/>`,
		"fallback": "energy-icons:user-search-48-bold",
	});
}

export default Component;
