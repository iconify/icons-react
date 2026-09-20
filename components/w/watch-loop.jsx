import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmh04e.css';
import '../../css/m/m7jivk.css';
import '../../css/d/d-h_4q1i.css';
import '../../css/d/d-p1bg5r.css';
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
		"content": `<path class="tmh04e"/><circle class="m7jivk"/>`,
		"fallback": "line-md:watch-loop",
	});
}

export default Component;
