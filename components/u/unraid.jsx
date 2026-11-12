import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atsgvzujm.css';
import '../../css/a/a-w0k537t.css';
import '../../css/i/iid5rgj_v.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGBsmEEePQ" x1="0" x2="1" y1="0" y2="0"><stop offset="0" class="atsgvzujm"/><stop offset="1" class="a-w0k537t"/></linearGradient></defs><path fill="url(#SVGBsmEEePQ)" class="iid5rgj_v"/>`,
		"fallback": "devicon:unraid",
	});
}

export default Component;
