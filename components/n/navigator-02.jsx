import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ocdg62b7r.css';
import '../../css/p/pmgkdmbqo.css';
import '../../css/x/x1-s1-bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ocdg62b7r"/><path class="pmgkdmbqo"/><path class="x1-s1-bdk"/></g>`,
		"fallback": "hugeicons:navigator-02",
	});
}

export default Component;
