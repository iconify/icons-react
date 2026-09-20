import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/psjfvob5q.css';
import '../../css/m/mm55jdb-v.css';
import '../../css/u/u888owovk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="psjfvob5q"/><path class="mm55jdb-v"/><path class="u888owovk"/></g>`,
		"fallback": "streamline-ultimate:lock-5",
	});
}

export default Component;
