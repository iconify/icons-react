import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sobuolbzi.css';
import '../../css/o/oscz0rbfq.css';
import '../../css/u/uvu2ukbyu.css';
import '../../css/m/mpwgpvmje.css';
import '../../css/c/cyn2jacob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sobuolbzi"/><path class="oscz0rbfq"/><path class="uvu2ukbyu"/><path class="mpwgpvmje"/><path class="cyn2jacob"/></g>`,
		"fallback": "hugeicons:mushroom-01",
	});
}

export default Component;
