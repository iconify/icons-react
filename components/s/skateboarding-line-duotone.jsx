import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/um3c8ib4d.css';
import '../../css/p/pyd8uurcz.css';
import '../../css/l/l-j6abbgp.css';
import '../../css/q/qczwjibac.css';
import '../../css/a/a7ayi91_s.css';
import '../../css/m/mxrg5g32t.css';
import '../../css/h/hocwk9rpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="um3c8ib4d"/><circle class="pyd8uurcz"/><path class="l-j6abbgp"/><path class="qczwjibac"/><path class="a7ayi91_s"/><path class="mxrg5g32t"/><path class="hocwk9rpw"/></g>`,
		"fallback": "solar:skateboarding-line-duotone",
	});
}

export default Component;
