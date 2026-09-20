import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/oypi36bql.css';
import '../../css/v/vxq7rybdf.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="oypi36bql"/><path class="vxq7rybdf"/></g>`,
		"fallback": "marketeq:research-presentation-left",
	});
}

export default Component;
