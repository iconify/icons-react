import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx2z2_bmy.css';
import '../../css/a/a8dw5zbze.css';
import '../../css/n/n05rifjbu.css';
import '../../css/o/o4--dac7r.css';
import '../../css/j/jamdwgbff.css';
import '../../css/h/hjczt2g6i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx2z2_bmy"/><path class="a8dw5zbze"/><path class="n05rifjbu"/><circle class="o4--dac7r"/><path class="jamdwgbff"/><path class="hjczt2g6i"/>`,
		"fallback": "openmoji:spouting-orca",
	});
}

export default Component;
