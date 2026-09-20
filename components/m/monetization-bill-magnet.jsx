import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j4unv0bwc.css';
import '../../css/p/piqps_eog.css';
import '../../css/t/t3uk6hb6i.css';
import '../../css/h/hd26bt87f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j4unv0bwc"/><path class="piqps_eog"/><path class="t3uk6hb6i"/><path class="hd26bt87f"/></g>`,
		"fallback": "streamline-freehand-color:monetization-bill-magnet",
	});
}

export default Component;
