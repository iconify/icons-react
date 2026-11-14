import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6w7gxzsp.css';
import '../../css/m/mcgtvq47v.css';
import '../../css/g/gjl24ib1p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6w7gxzsp"/><path class="mcgtvq47v"/><path class="gjl24ib1p"/>`,
		"fallback": "selfhst:komga-light",
	});
}

export default Component;
