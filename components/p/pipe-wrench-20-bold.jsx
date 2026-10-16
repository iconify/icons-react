import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr-sxkt2n.css';
import '../../css/p/poccklbbx.css';
import '../../css/h/hhujsxb0y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr-sxkt2n"/><path class="poccklbbx"/><path class="hhujsxb0y"/>`,
		"fallback": "energy-icons:pipe-wrench-20-bold",
	});
}

export default Component;
