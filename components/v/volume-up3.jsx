import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/byp4rtb1l.css';
import '../../css/v/viwczm0pv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="byp4rtb1l"/><path class="viwczm0pv"/></g>`,
		"fallback": "reicon:volume-up3",
	});
}

export default Component;
