import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uk8te3bak.css';
import '../../css/g/gnc4ceb8u.css';
import '../../css/v/ve33t5vys.css';
import '../../css/s/sigei6ulc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uk8te3bak"/><path class="gnc4ceb8u"/><path class="ve33t5vys"/><path class="sigei6ulc"/></g>`,
		"fallback": "lucide-extended:mail-pen-duotone",
	});
}

export default Component;
