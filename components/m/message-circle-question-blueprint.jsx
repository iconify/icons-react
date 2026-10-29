import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/trjyazfbq.css';
import '../../css/o/onxv_sb5b.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/j/jd64qhwdo.css';
import '../../css/f/ffl7z0bue.css';
import '../../css/g/gzv2ifc4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="trjyazfbq wm-deco"/><path class="onxv_sb5b wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="jd64qhwdo wm-k"/><path class="ffl7z0bue wm-a"/><path class="gzv2ifc4k wm-k"/></g>`,
		"fallback": "withicons:message-circle-question-blueprint",
	});
}

export default Component;
