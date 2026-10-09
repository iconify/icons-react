import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r86gyghte.css';
import '../../css/n/nkn0wyb7u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r86gyghte"/><path class="nkn0wyb7u"/>`,
		"fallback": "energy-icons:radiation-48-bold",
	});
}

export default Component;
