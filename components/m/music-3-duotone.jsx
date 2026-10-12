import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9psl9bzc.css';
import '../../css/m/m49r26bmi.css';
import '../../css/p/pf_z20b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s9psl9bzc"/><path class="m49r26bmi"/><path class="pf_z20b-s"/></g>`,
		"fallback": "lucide-extended:music-3-duotone",
	});
}

export default Component;
