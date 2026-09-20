import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bub8qccmg.css';
import '../../css/d/dbifspbys.css';
import '../../css/c/cdp_3db-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bub8qccmg"/><path class="dbifspbys"/><path class="cdp_3db-d"/></g>`,
		"fallback": "reicon:layers2-filled",
	});
}

export default Component;
