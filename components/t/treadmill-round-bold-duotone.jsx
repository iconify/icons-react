import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/etj7zqhmh.css';
import '../../css/y/ymcuxj93n.css';
import '../../css/a/a3uc20buk.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/i/ijnsdcb5f.css';
import '../../css/o/ot4vp_b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="etj7zqhmh"/><path clip-rule="evenodd" class="ymcuxj93n"/><path class="a3uc20buk"/><g class="mc2zb0bvp"><path class="ijnsdcb5f"/><path class="ot4vp_b2c"/></g></g>`,
		"fallback": "solar:treadmill-round-bold-duotone",
	});
}

export default Component;
