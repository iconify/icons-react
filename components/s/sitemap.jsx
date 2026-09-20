import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrbn05bgs.css';
import '../../css/b/boo849bbg.css';
import '../../css/z/zf2mmcbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrbn05bgs"/><path class="boo849bbg"/><path class="zf2mmcbib"/>`,
		"fallback": "prime:sitemap",
	});
}

export default Component;
