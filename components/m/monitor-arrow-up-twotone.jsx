import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcllpe.css';
import '../../css/i/iw1iew.css';
import '../../css/y/ydovum.css';
import '../../css/i/ik5ydf.css';
import '../../css/a/ay17qu.css';
import '../../css/y/y4wbml.css';
import '../../css/a/ah9y-h.css';
import '../../css/d/dlc88b.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-70.css';
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
		"content": `<path class="dcllpe iw1iew ydovum"/><path class="ik5ydf ydovum"/><path class="ay17qu iw1iew y4wbml"/><path class="ah9y-h iw1iew y4wbml"/><path class="dlc88b iw1iew y4wbml"/>`,
		"fallback": "line-md:monitor-arrow-up-twotone",
	});
}

export default Component;
