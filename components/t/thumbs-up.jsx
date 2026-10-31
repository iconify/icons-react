import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nbrr5edha.css';
import '../../css/w/w_392wb-k.css';
import '../../css/r/r2-mckgxj.css';
import '../../css/u/uczgk3bsv.css';
import '../../css/o/ogq2nibyg.css';
import '../../css/t/toam04u9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nbrr5edha wm-shadow"/><path class="w_392wb-k"/><path class="r2-mckgxj"/><path class="uczgk3bsv"/><path class="ogq2nibyg"/><path class="toam04u9l"/></g>`,
		"fallback": "withicons-retro:thumbs-up",
	});
}

export default Component;
