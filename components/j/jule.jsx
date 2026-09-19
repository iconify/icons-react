import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_4n6ub8r.css';
import '../../css/t/tn4_b_t8u.css';
import '../../css/o/op37kihor.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_4n6ub8r"/><path class="tn4_b_t8u"/><path class="op37kihor"/>`,
		"fallback": "catppuccin:jule",
	});
}

export default Component;
