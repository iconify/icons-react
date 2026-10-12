import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ezkkax2qj.css';
import '../../css/f/f29fwjbso.css';
import '../../css/j/jyuddqs9y.css';
import '../../css/r/roea4-jbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ezkkax2qj"/><path class="f29fwjbso"/><path class="jyuddqs9y"/><path class="roea4-jbt"/></g>`,
		"fallback": "lucide-extended:switch-camera-duotone",
	});
}

export default Component;
