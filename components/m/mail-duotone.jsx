import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/ve33t5vys.css';
import '../../css/q/q050sk4js.css';
import '../../css/s/sigei6ulc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ve33t5vys"/><path class="q050sk4js"/><path class="sigei6ulc"/></g>`,
		"fallback": "lucide-extended:mail-duotone",
	});
}

export default Component;
