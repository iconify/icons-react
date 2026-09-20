import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/gmav7l60j.css';
import '../../css/h/h3bdfpb6j.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="gmav7l60j"/><path class="h3bdfpb6j"/></g>`,
		"fallback": "marketeq:water-bottle",
	});
}

export default Component;
