import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kkrhlgb2a.css';
import '../../css/b/bxbjmyb0h.css';
import '../../css/h/h1a-_zb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kkrhlgb2a"/><path class="bxbjmyb0h"/><path class="h1a-_zb3n"/></g>`,
		"fallback": "keyline-icons:tablet-sharp-two-tone",
	});
}

export default Component;
