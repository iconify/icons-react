import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzg2ntk9w.css';
import '../../css/w/wbdw8vbrx.css';
import '../../css/w/w6lm9ri2m.css';
import '../../css/g/gtysnmbcg.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/bjtv4_b_n.css';
import '../../css/g/g1roysbqd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzg2ntk9w"/><path class="wbdw8vbrx"/><path class="w6lm9ri2m"/><path class="gtysnmbcg"/><g class="ij2x_72vy"><path class="bjtv4_b_n"/><path class="g1roysbqd"/></g>`,
		"fallback": "openmoji:lighter",
	});
}

export default Component;
