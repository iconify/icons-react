import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db7nnwbjm.css';
import '../../css/j/jdfj84bsl.css';
import '../../css/k/ka2s7tbmc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db7nnwbjm"/><path class="jdfj84bsl"/><path class="ka2s7tbmc"/>`,
		"fallback": "energy-icons:sprout-20",
	});
}

export default Component;
