import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulz2_jrvn.css';
import '../../css/l/lkzr4lbat.css';
import '../../css/j/jt2wz2wem.css';
import '../../css/p/peock8bva.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulz2_jrvn"/><path class="lkzr4lbat"/><path class="jt2wz2wem"/><path class="peock8bva"/>`,
		"fallback": "fxemoji:statueofliberty",
	});
}

export default Component;
