import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4aitobkj.css';
import '../../css/w/w33pk5bec.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4aitobkj"/><path class="w33pk5bec"/>`,
		"fallback": "energy-icons:text-search-48-bold",
	});
}

export default Component;
