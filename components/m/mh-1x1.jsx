import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f6qf1cgpo.css';
import '../../css/h/h5zba18xq.css';
import '../../css/i/i5hlffn0h.css';
import '../../css/i/i9fzrhilo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="f6qf1cgpo"/><path class="h5zba18xq"/><path class="i5hlffn0h"/><path class="i9fzrhilo"/></g>`,
		"fallback": "flag:mh-1x1",
	});
}

export default Component;
