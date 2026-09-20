import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlrgcccrm.css';
import '../../css/o/oqhmv740i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlrgcccrm"/><path class="oqhmv740i"/>`,
		"fallback": "selfhst:prestashop",
	});
}

export default Component;
