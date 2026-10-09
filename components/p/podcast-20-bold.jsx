import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxmq_uzjj.css';
import '../../css/o/o8au-u-tj.css';
import '../../css/z/zi_t7ybkv.css';
import '../../css/p/pv-y02gkc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxmq_uzjj"/><path class="o8au-u-tj"/><path class="zi_t7ybkv"/><path class="pv-y02gkc"/>`,
		"fallback": "energy-icons:podcast-20-bold",
	});
}

export default Component;
