import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9v855hut.css';
import '../../css/n/ny_2c4bnf.css';
import '../../css/n/nwcxv7blz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9v855hut"/><path class="ny_2c4bnf"/><path class="nwcxv7blz"/>`,
		"fallback": "energy-icons:marker-hydrogen-48",
	});
}

export default Component;
