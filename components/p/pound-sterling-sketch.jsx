import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o3b358bfj.css';
import '../../css/q/qw5y-bbmc.css';
import '../../css/d/d8pzfjs5o.css';
import '../../css/q/qqyqacckp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o3b358bfj wm-k"/><path class="qw5y-bbmc wm-a"/><path class="d8pzfjs5o wm-k"/><path class="qqyqacckp wm-a"/></g>`,
		"fallback": "withicons:pound-sterling-sketch",
	});
}

export default Component;
