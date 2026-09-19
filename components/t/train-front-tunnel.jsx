import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p9olpqbsm.css';
import '../../css/a/a1-t9q27i.css';
import '../../css/n/n12q9ybjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p9olpqbsm"/><path class="a1-t9q27i"/><path class="n12q9ybjm"/></g>`,
		"fallback": "hugeicons:train-front-tunnel",
	});
}

export default Component;
