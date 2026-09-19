import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_txeacgn.css';
import '../../css/s/sn58b5b3f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_txeacgn"/><path class="sn58b5b3f"/>`,
		"fallback": "cil:wallet",
	});
}

export default Component;
