import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/knqloubjh.css';
import '../../css/o/o53s4acvk.css';
import '../../css/d/d0kffib3x.css';
import '../../css/j/jdnjqstds.css';
import '../../css/j/jm0ilrbbv.css';
import '../../css/f/f2mzbubxd.css';
import '../../css/l/lltp3xbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="knqloubjh wm-deco"/><path class="o53s4acvk wm-deco"/><path class="d0kffib3x wm-deco"/><path class="jdnjqstds wm-k"/><path class="jm0ilrbbv wm-a"/><path class="f2mzbubxd wm-k"/><path class="lltp3xbrz wm-a"/></g>`,
		"fallback": "withicons:thermometer-snowflake-blueprint",
	});
}

export default Component;
