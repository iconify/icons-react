import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hunaykbua.css';
import '../../css/p/pisd0hb5m.css';
import '../../css/u/ukd3-oy9k.css';
import '../../css/b/bnmgfjkwp.css';
import '../../css/p/pdm4jiogk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hunaykbua wm-deco"/><path class="pisd0hb5m wm-deco"/><path class="ukd3-oy9k wm-deco"/><path class="bnmgfjkwp"/><path class="pdm4jiogk"/></g>`,
		"fallback": "withicons:spider-web-blueprint",
	});
}

export default Component;
