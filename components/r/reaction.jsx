import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ytlnqnvjr.css';
import '../../css/i/izakys4nx.css';
import '../../css/o/o1e5bsb1v.css';
import '../../css/b/btuxjnb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ytlnqnvjr"/><path class="izakys4nx"/><circle class="o1e5bsb1v"/><circle class="btuxjnb0g"/></g>`,
		"fallback": "wordpress:reaction",
	});
}

export default Component;
