import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmxbyf.css';
import '../../css/g/g-quyv.css';
import '../../css/h/h4ibws.css';
import '../../css/q/qmaqso.css';
import '../../css/e/e65c9b.css';
import '../../css/o/oaychk.css';
import '../../css/s/so-from-56.css';
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
		"content": `<path class="fmxbyf"/><circle class="g-quyv h4ibws"/><circle class="g-quyv qmaqso"/><circle class="e65c9b g-quyv"/><circle class="g-quyv oaychk"/>`,
		"fallback": "line-md:peanut",
	});
}

export default Component;
