import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmfz2p.css';
import '../../css/i/iw1iew.css';
import '../../css/y/ydovum.css';
import '../../css/m/mgcd_x.css';
import '../../css/w/w3lxpm.css';
import '../../css/y/y4wbml.css';
import '../../css/m/mtb-nu.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-48.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmfz2p iw1iew ydovum"/><circle class="mgcd_x ydovum"/><path class="iw1iew w3lxpm y4wbml"/><path class="iw1iew mtb-nu y4wbml"/>`,
		"fallback": "line-md:map-marker-remove-twotone",
	});
}

export default Component;
