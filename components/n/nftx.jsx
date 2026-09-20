import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyjy3kbll.css';
import '../../css/p/p_067m8_e.css';
import '../../css/v/va1a_7b_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyjy3kbll"/><path class="p_067m8_e"/><path class="va1a_7b_k"/>`,
		"fallback": "token:nftx",
	});
}

export default Component;
