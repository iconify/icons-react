import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_gwm_bba.css';
import '../../css/x/xvmas6b-z.css';
import '../../css/o/ois2n1s1o.css';
import '../../css/k/kg_t2pb7u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_gwm_bba"/><path class="xvmas6b-z"/><path class="ois2n1s1o"/><path class="kg_t2pb7u"/>`,
		"fallback": "streamline-pixel:internet-network-www",
	});
}

export default Component;
