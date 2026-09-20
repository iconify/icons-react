import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_q7bt.css';
import '../../css/s/s8e22g.css';
import '../../css/b/b1urau.css';
import '../../css/f/f32okk.css';
import '../../css/c/c6u95x.css';
import '../../css/r/rhg2sy.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_q7bt s8e22g"/><path class="b1urau f32okk s8e22g"/><path class="b1urau c6u95x s8e22g"/><path class="b1urau rhg2sy s8e22g"/>`,
		"fallback": "line-md:moon-alt-twotone",
	});
}

export default Component;
