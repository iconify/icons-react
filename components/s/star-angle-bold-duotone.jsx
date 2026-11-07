import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/kddhlpb-n.css';
import '../../css/n/n26m0h08c.css';
import '../../css/d/d8p6fytrt.css';
import '../../css/k/k7oz8hhvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="kddhlpb-n"/><path class="n26m0h08c"/><path class="d8p6fytrt"/></g><path class="k7oz8hhvi"/>`,
		"fallback": "solar:star-angle-bold-duotone",
	});
}

export default Component;
