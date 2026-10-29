import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s0swfsbrw.css';
import '../../css/s/sp5333bfs.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/z/zjyeipdew.css';
import '../../css/g/gpzkjz08t.css';
import '../../css/m/musmhrbxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="s0swfsbrw wm-deco"/><path class="sp5333bfs wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="wm-k zjyeipdew"/><path class="gpzkjz08t wm-a"/><path class="musmhrbxe wm-s"/></g>`,
		"fallback": "withicons:jack-o-lantern-blueprint",
	});
}

export default Component;
