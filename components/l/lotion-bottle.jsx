import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzz9yqv2o.css';
import '../../css/f/fnqg8wblb.css';
import '../../css/o/o2eagibnr.css';
import '../../css/t/t6_odzb_z.css';
import '../../css/l/lsutnug7y.css';
import '../../css/f/f_tuwnbyp.css';
import '../../css/y/yfco0lbcj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzz9yqv2o"/><path class="fnqg8wblb"/><path class="o2eagibnr"/><ellipse class="t6_odzb_z"/><path class="lsutnug7y"/><path class="f_tuwnbyp"/><ellipse class="yfco0lbcj"/>`,
		"fallback": "openmoji:lotion-bottle",
	});
}

export default Component;
