import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcck3kbsm.css';
import '../../css/s/sarzorbyp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcck3kbsm"/><path class="sarzorbyp"/>`,
		"fallback": "energy-icons:scope-2-20",
	});
}

export default Component;
