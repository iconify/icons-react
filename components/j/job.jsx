import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/an4wjrjza.css';
import '../../css/n/n7pemp34c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="an4wjrjza"/><path class="n7pemp34c"/></g>`,
		"fallback": "marketeq:job",
	});
}

export default Component;
