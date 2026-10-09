import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/l/lyr6s0wuk.css';
import '../../css/b/by6gobvlv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="lyr6s0wuk"/><path class="by6gobvlv"/>`,
		"fallback": "energy-icons:plus-circle-48",
	});
}

export default Component;
