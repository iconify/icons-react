import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1qdg1bld.css';
import '../../css/s/s519vbn7w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1qdg1bld"/><path class="s519vbn7w"/>`,
		"fallback": "selfhst:thingiverse",
	});
}

export default Component;
