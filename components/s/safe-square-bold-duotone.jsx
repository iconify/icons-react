import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn_frcb-c.css';
import '../../css/o/oxd2n2_mg.css';
import '../../css/r/rwsejcbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn_frcb-c"/><path class="oxd2n2_mg"/><path clip-rule="evenodd" class="rwsejcbky"/>`,
		"fallback": "solar:safe-square-bold-duotone",
	});
}

export default Component;
