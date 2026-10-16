import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdt3zcvtz.css';
import '../../css/s/srn-1hkgh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdt3zcvtz"/><path class="srn-1hkgh"/>`,
		"fallback": "energy-icons:money-bag-48",
	});
}

export default Component;
