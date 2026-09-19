import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1mdvbqre.css';
import '../../css/j/jh4i-mbro.css';
import '../../css/i/ipqn73b5n.css';
import '../../css/k/kc2lvibvd.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="e1mdvbqre"/><path class="jh4i-mbro"/><path class="ipqn73b5n"/><path class="kc2lvibvd"/>`,
		"fallback": "geo:turf-bezier",
	});
}

export default Component;
