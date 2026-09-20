import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rccltgwpt.css';
import '../../css/b/bg4qdp5ho.css';
import '../../css/o/o-2211bzh.css';
import '../../css/v/vg5zmbblx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rccltgwpt"/><path class="bg4qdp5ho"/><path class="o-2211bzh"/><path class="vg5zmbblx"/>`,
		"fallback": "selfhst:sando",
	});
}

export default Component;
