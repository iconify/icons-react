import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-4rqjbfm.css';
import '../../css/r/rul18paak.css';
import '../../css/l/l3vl_joki.css';
import '../../css/m/mbx7u6bcq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-4rqjbfm"/><path class="rul18paak"/><path class="l3vl_joki"/><path class="mbx7u6bcq"/>`,
		"fallback": "energy-icons:lever-48-bold",
	});
}

export default Component;
