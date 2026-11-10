import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/zvbcgcbmx.css';
import '../../css/p/pgp9h4h2p.css';
import '../../css/u/uecmhcb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="zvbcgcbmx"/><path class="pgp9h4h2p"/><path class="uecmhcb2c"/></g>`,
		"fallback": "matita:kappa-capital",
	});
}

export default Component;
