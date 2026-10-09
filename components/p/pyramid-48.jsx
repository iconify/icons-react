import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3kwf5bnk.css';
import '../../css/o/osinw2bal.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3kwf5bnk"/><path class="osinw2bal"/>`,
		"fallback": "energy-icons:pyramid-48",
	});
}

export default Component;
