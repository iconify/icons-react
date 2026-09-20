import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clg9ja.css';
import '../../css/y/ydovum.css';
import '../../css/q/qmefch.css';
import '../../css/t/tsch9o.css';
import '../../css/o/oah_lw.css';
import '../../css/a/a-wxtk.css';
import '../../css/f/fftggp.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-1px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clg9ja ydovum"/><circle class="qmefch tsch9o ydovum"/><circle class="oah_lw tsch9o ydovum"/><circle class="a-wxtk tsch9o ydovum"/><circle class="fftggp tsch9o ydovum"/>`,
		"fallback": "line-md:peanut-twotone",
	});
}

export default Component;
