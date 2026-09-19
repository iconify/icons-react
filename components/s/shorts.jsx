import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wpxbn7r9f.css';
import '../../css/s/sx1x2ugoh.css';
import '../../css/z/zwb0ztbpv.css';
import '../../css/c/cfda53goq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wpxbn7r9f"/><path class="sx1x2ugoh"/><path class="zwb0ztbpv"/><path class="cfda53goq"/></g>`,
		"fallback": "icon-park:shorts",
	});
}

export default Component;
