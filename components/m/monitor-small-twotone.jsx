import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/n/nhq3ze.css';
import '../../css/y/ydovum.css';
import '../../css/i/ik5ydf.css';
import '../../css/o/o71y-l.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-fwg6_w.css';
import '../../css/d/d-7yzihk.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew nhq3ze ydovum"/><path class="ik5ydf ydovum"/><path class="iw1iew o71y-l"/>`,
		"fallback": "line-md:monitor-small-twotone",
	});
}

export default Component;
