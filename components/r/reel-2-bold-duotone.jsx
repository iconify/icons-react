import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxqub0bkx.css';
import '../../css/u/uw2q8fo_m.css';
import '../../css/g/gep8t6bjz.css';
import '../../css/d/dkkib-ewx.css';
import '../../css/l/l7uqntb2z.css';
import '../../css/c/c4q01mb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxqub0bkx"/><path clip-rule="evenodd" class="uw2q8fo_m"/><path class="gep8t6bjz"/><path class="dkkib-ewx"/><path class="l7uqntb2z"/><path class="c4q01mb0y"/>`,
		"fallback": "solar:reel-2-bold-duotone",
	});
}

export default Component;
