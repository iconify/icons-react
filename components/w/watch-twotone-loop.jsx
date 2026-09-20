import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vybm5r.css';
import '../../css/y/ydovum.css';
import '../../css/s/sha3jm.css';
import '../../css/d/d-h_4q1i.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-p1bg5r.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-cqmtvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vybm5r ydovum"/><circle class="sha3jm ydovum"/>`,
		"fallback": "line-md:watch-twotone-loop",
	});
}

export default Component;
