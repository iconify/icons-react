import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txg_57bbj.css';
import '../../css/y/yz7fw7w9r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txg_57bbj"/><path class="yz7fw7w9r"/>`,
		"fallback": "energy-icons:luggage-48-bold",
	});
}

export default Component;
