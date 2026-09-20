import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1_o48b8v.css';
import '../../css/w/w2o_n1p2a.css';
import '../../css/i/i-41ktb_b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t1_o48b8v"/><path class="w2o_n1p2a"/><path clip-rule="evenodd" class="i-41ktb_b"/>`,
		"fallback": "qlementine-icons:paste-16",
	});
}

export default Component;
