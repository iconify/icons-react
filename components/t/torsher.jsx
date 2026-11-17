import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkccombky.css';
import '../../css/r/r0yz7hbft.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="gkccombky"/><path class="r0yz7hbft"/>`,
		"fallback": "selfhst:torsher",
	});
}

export default Component;
