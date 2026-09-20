import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqgjrf.css';
import '../../css/i/iw1iew.css';
import '../../css/i/i794zx.css';
import '../../css/y/y4wbml.css';
import '../../css/y/yvqxys.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-34.css';
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
		"content": `<path class="iqgjrf iw1iew"/><path class="i794zx iw1iew y4wbml"/><path class="iw1iew y4wbml yvqxys"/>`,
		"fallback": "line-md:volume-remove-twotone",
	});
}

export default Component;
