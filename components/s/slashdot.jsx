import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6vo45b0z.css';
import '../../css/z/z5rc_zbev.css';
import '../../css/g/glg2zcb3c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6vo45b0z"/><path class="z5rc_zbev"/><path class="glg2zcb3c"/>`,
		"fallback": "selfhst:slashdot",
	});
}

export default Component;
