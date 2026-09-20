import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igi9we.css';
import '../../css/i/iw1iew.css';
import '../../css/y/ydovum.css';
import '../../css/j/j46_iu.css';
import '../../css/u/u2yb_n.css';
import '../../css/y/y4wbml.css';
import '../../css/o/oxmyas.css';
import '../../css/s/so-from-22.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igi9we iw1iew ydovum"/><path class="iw1iew j46_iu ydovum"/><path class="iw1iew u2yb_n y4wbml"/><path class="iw1iew oxmyas y4wbml"/>`,
		"fallback": "line-md:person-add-filled",
	});
}

export default Component;
