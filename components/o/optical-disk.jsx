import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj7hsab7s.css';
import '../../css/j/jnzjf276y.css';
import '../../css/n/n20_omb2u.css';
import '../../css/n/njypggavl.css';
import '../../css/e/e-z_0hbgs.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj7hsab7s"/><path class="jnzjf276y"/><g class="n20_omb2u"><path class="njypggavl"/><path class="e-z_0hbgs"/></g>`,
		"fallback": "openmoji:optical-disk",
	});
}

export default Component;
