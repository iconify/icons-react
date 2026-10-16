import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj6ml7n0t.css';
import '../../css/u/ufkna9bqo.css';
import '../../css/j/jj0jprbfg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj6ml7n0t"/><path class="ufkna9bqo"/><path class="jj0jprbfg"/>`,
		"fallback": "energy-icons:strategy-20",
	});
}

export default Component;
