import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4enznbyj.css';
import '../../css/k/kjieaf7cx.css';
import '../../css/p/pvg5xqbkw.css';
import '../../css/y/y99owegkb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4enznbyj"/><path class="kjieaf7cx"/><path class="pvg5xqbkw"/><path class="y99owegkb"/>`,
		"fallback": "energy-icons:multimeter-20-bold",
	});
}

export default Component;
