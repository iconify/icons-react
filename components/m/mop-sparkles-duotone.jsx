import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a83w9s79w.css';
import '../../css/q/q7dxu21ku.css';
import '../../css/y/ymeccpebe.css';
import '../../css/g/gjg0c_wep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a83w9s79w"/><path class="q7dxu21ku"/><path class="ymeccpebe"/><path class="gjg0c_wep"/></g>`,
		"fallback": "lucide-extended:mop-sparkles-duotone",
	});
}

export default Component;
