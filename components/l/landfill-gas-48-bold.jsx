import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6wqg-hrr.css';
import '../../css/c/ch_p76tdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6wqg-hrr"/><path class="ch_p76tdz"/>`,
		"fallback": "energy-icons:landfill-gas-48-bold",
	});
}

export default Component;
