import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/din7kacmm.css';
import '../../css/o/ojbfnibyv.css';
import '../../css/j/jjw_gzn8g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="din7kacmm"/><path class="ojbfnibyv"/><path class="jjw_gzn8g"/>`,
		"fallback": "selfhst:ksuite-contacts-dark",
	});
}

export default Component;
