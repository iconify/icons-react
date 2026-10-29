import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cvzjqtbcy.css';
import '../../css/z/z3ys52bre.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/i/is_-82b8q.css';
import '../../css/p/p4e6g2c5f.css';
import '../../css/o/o8av1-bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="cvzjqtbcy wm-deco"/><path class="wm-deco z3ys52bre"/><path class="cf3uzcrzx wm-deco"/><path class="is_-82b8q wm-k"/><path class="p4e6g2c5f wm-s"/><path class="o8av1-bqi wm-s"/></g>`,
		"fallback": "withicons:phone-incoming-blueprint",
	});
}

export default Component;
