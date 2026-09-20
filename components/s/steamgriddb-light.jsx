import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6qntnrup.css';
import '../../css/f/fzz6-v-3g.css';
import '../../css/o/o_tfnwc4u.css';
import '../../css/n/nx6toimit.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6qntnrup"/><path class="fzz6-v-3g"/><path class="o_tfnwc4u"/><path class="nx6toimit"/>`,
		"fallback": "selfhst:steamgriddb-light",
	});
}

export default Component;
