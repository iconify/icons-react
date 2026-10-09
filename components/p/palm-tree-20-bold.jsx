import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqbdr3bwf.css';
import '../../css/l/lq302uv1z.css';
import '../../css/g/gsxsmjbdv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqbdr3bwf"/><path class="lq302uv1z"/><path class="gsxsmjbdv"/>`,
		"fallback": "energy-icons:palm-tree-20-bold",
	});
}

export default Component;
