import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmfz2p.css';
import '../../css/i/iw1iew.css';
import '../../css/y/ydovum.css';
import '../../css/m/mgcd_x.css';
import '../../css/s/s9sbkg.css';
import '../../css/y/y4wbml.css';
import '../../css/a/afx8nf.css';
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
		"content": `<path class="bmfz2p iw1iew ydovum"/><circle class="mgcd_x ydovum"/><path class="iw1iew s9sbkg y4wbml"/><path class="afx8nf iw1iew y4wbml"/>`,
		"fallback": "line-md:map-marker-plus-twotone",
	});
}

export default Component;
