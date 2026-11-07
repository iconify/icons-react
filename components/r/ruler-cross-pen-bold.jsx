import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py1haibyr.css';
import '../../css/r/rl670hs1g.css';
import '../../css/f/f-98sr1ba.css';
import '../../css/y/y608-6bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py1haibyr"/><path class="rl670hs1g"/><path class="f-98sr1ba"/><path class="y608-6bpc"/>`,
		"fallback": "solar:ruler-cross-pen-bold",
	});
}

export default Component;
