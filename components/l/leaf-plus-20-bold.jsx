import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyzyqw1hp.css';
import '../../css/k/ko4o_xbkk.css';
import '../../css/o/ol_xz9rkq.css';
import '../../css/g/ghl2m9vtv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyzyqw1hp"/><path class="ko4o_xbkk"/><path class="ol_xz9rkq"/><path class="ghl2m9vtv"/>`,
		"fallback": "energy-icons:leaf-plus-20-bold",
	});
}

export default Component;
