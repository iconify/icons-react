import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmn_z5chk.css';
import '../../css/p/pn2j6edzu.css';
import '../../css/f/fh6l5_iwg.css';
import '../../css/x/x6dmml5yz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmn_z5chk"/><path class="pn2j6edzu"/><path class="fh6l5_iwg"/><path class="x6dmml5yz"/>`,
		"fallback": "energy-icons:oil-rig-20-bold",
	});
}

export default Component;
