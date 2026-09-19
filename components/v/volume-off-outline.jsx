import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mit5m27lp.css';
import '../../css/b/b5cbtex2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mit5m27lp"/><path class="b5cbtex2p"/>`,
		"fallback": "basil:volume-off-outline",
	});
}

export default Component;
