import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hkwu35btw.css';
import '../../css/o/o2--xo00n.css';
import '../../css/k/kmcbvkrhb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="hkwu35btw"/><path class="o2--xo00n"/></g><path class="kmcbvkrhb"/>`,
		"fallback": "garden:microphone-on-stroke-16",
	});
}

export default Component;
