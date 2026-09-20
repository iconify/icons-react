import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sll1r44eb.css';
import '../../css/m/mr5-0kkhw.css';
import '../../css/c/cz6_nbepy.css';
import '../../css/p/pvctzfblt.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sll1r44eb"/><path class="mr5-0kkhw"/><path class="cz6_nbepy"/><path class="pvctzfblt"/>`,
		"fallback": "medical-icon:pathology",
	});
}

export default Component;
