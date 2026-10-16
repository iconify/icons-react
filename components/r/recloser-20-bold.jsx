import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqjo_17sw.css';
import '../../css/b/bxk-0nxsq.css';
import '../../css/w/wtv0jqdvv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqjo_17sw"/><path class="bxk-0nxsq"/><path class="wtv0jqdvv"/>`,
		"fallback": "energy-icons:recloser-20-bold",
	});
}

export default Component;
