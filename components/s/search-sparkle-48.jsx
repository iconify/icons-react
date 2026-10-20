import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkje3ybpz.css';
import '../../css/u/udqbpfbup.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkje3ybpz"/><path class="udqbpfbup"/>`,
		"fallback": "energy-icons:search-sparkle-48",
	});
}

export default Component;
