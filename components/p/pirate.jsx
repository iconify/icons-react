import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh2693boa.css';
import '../../css/f/f1av2wb0k.css';
import '../../css/r/ra7pdcbvc.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh2693boa"/><path class="f1av2wb0k"/><path class="ra7pdcbvc"/>`,
		"fallback": "tabler-flags:pirate",
	});
}

export default Component;
