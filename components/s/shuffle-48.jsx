import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhf6nqbcm.css';
import '../../css/k/khmlq3g6t.css';
import '../../css/b/b63ugobgm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhf6nqbcm"/><path class="khmlq3g6t"/><path class="b63ugobgm"/>`,
		"fallback": "energy-icons:shuffle-48",
	});
}

export default Component;
