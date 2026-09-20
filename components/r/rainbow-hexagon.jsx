import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wbvbzfbwo.css';
import '../../css/d/dz5rcnzjx.css';
import '../../css/f/fb04lm02e.css';
import '../../css/l/l2eez9j-u.css';
import '../../css/b/bbx7nf83y.css';
import '../../css/d/dwpbpn69e.css';
import '../../css/x/x1mdp195q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="wbvbzfbwo"/><path class="dz5rcnzjx"/><path class="fb04lm02e"/><path class="l2eez9j-u"/><path class="bbx7nf83y"/><path class="dwpbpn69e"/></g><path class="x1mdp195q"/>`,
		"fallback": "openmoji:rainbow-hexagon",
	});
}

export default Component;
