import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cspl7mbgk.css';
import '../../css/r/rq1b_prvq.css';
import '../../css/v/vydu3dknt.css';
import '../../css/i/i-6i6abaz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cspl7mbgk"/><path class="rq1b_prvq"/><path class="vydu3dknt"/><path class="i-6i6abaz"/>`,
		"fallback": "selfhst:nodemailer-dark",
	});
}

export default Component;
