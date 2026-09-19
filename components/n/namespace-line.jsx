import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6zk_hi4f.css';
import '../../css/k/kwb2ybc3g.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6zk_hi4f"/><path class="kwb2ybc3g"/>`,
		"fallback": "clarity:namespace-line",
	});
}

export default Component;
