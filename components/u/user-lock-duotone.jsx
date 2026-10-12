import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_7khxbol.css';
import '../../css/z/z9d523bzi.css';
import '../../css/s/skp8tjssj.css';
import '../../css/o/ojrw9tb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o_7khxbol"/><path class="z9d523bzi"/><path class="skp8tjssj"/><path class="ojrw9tb0y"/></g>`,
		"fallback": "lucide-extended:user-lock-duotone",
	});
}

export default Component;
