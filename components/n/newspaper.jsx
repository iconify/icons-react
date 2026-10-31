import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xq5vz8bul.css';
import '../../css/b/bfmb_n59r.css';
import '../../css/c/cyrrl0bih.css';
import '../../css/c/ce8iu14hc.css';
import '../../css/z/z2vp3m33t.css';
import '../../css/s/sofq3bvsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xq5vz8bul"/><path class="bfmb_n59r wm-shadow"/><path class="cyrrl0bih"/><path class="ce8iu14hc"/><path class="z2vp3m33t"/><path class="sofq3bvsi"/></g>`,
		"fallback": "withicons-brutal:newspaper",
	});
}

export default Component;
