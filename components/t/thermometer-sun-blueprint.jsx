import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p7-6kpb8e.css';
import '../../css/f/fp0q6sb_v.css';
import '../../css/z/z8l7dzz0g.css';
import '../../css/j/jdnjqstds.css';
import '../../css/j/juysxrbqk.css';
import '../../css/f/f2mzbubxd.css';
import '../../css/r/r3yk-va4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="p7-6kpb8e wm-deco"/><path class="fp0q6sb_v wm-deco"/><path class="wm-deco z8l7dzz0g"/><path class="jdnjqstds wm-k"/><path class="juysxrbqk wm-a"/><path class="f2mzbubxd wm-k"/><path class="r3yk-va4e wm-a"/></g>`,
		"fallback": "withicons:thermometer-sun-blueprint",
	});
}

export default Component;
