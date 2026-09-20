import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/v/v8jzga.css';
import '../../css/w/w2-cir.css';
import '../../css/o/om79qv.css';
import '../../css/c/c27iog.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-22.css';
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
		"content": `<path class="iw1iew v8jzga w2-cir"/><path class="iw1iew om79qv v8jzga"/><path class="c27iog iw1iew"/>`,
		"fallback": "line-md:person-remove-twotone",
	});
}

export default Component;
