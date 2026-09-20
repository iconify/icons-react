import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt2otpcin.css';
import '../../css/e/e6wnbobdo.css';
import '../../css/i/ik3n-9xvx.css';
import '../../css/r/r-exbihkf.css';
import '../../css/x/xc6115m2b.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt2otpcin"/><path class="e6wnbobdo"/><path class="ik3n-9xvx"/><path class="r-exbihkf"/><path class="xc6115m2b"/>`,
		"fallback": "openmoji:peertube",
	});
}

export default Component;
