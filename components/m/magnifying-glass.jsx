import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/kax9pczmm.css';
import '../../css/o/ox0xq7bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="kax9pczmm"/><path class="ox0xq7bpe"/></g>`,
		"fallback": "streamline-sharp-color:magnifying-glass",
	});
}

export default Component;
