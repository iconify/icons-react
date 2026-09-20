import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxsznzm1o.css';
import '../../css/r/r20wh5g3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxsznzm1o"/><path class="r20wh5g3m"/>`,
		"fallback": "mage:phone-cross-fill",
	});
}

export default Component;
