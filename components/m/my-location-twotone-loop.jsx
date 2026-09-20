import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/t/tncpqz.css';
import '../../css/y/ydovum.css';
import '../../css/a/ahky_j.css';
import '../../css/n/nslklh.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-4px.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-pjbx7p.css';
import '../../css/t/tr-2c6-rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew tncpqz ydovum"/><circle class="ahky_j ydovum"/><path class="iw1iew nslklh"/>`,
		"fallback": "line-md:my-location-twotone-loop",
	});
}

export default Component;
