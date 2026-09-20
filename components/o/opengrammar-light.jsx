import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/f/f-c80ro0i.css';
import '../../css/h/h4n6ekwws.css';
import '../../css/t/t83du-b-b.css';
import '../../css/t/txnq4cljl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGj4WcwbgV" x1="-51.298" x2="563.298" y1="78.581" y2="433.419" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="f-c80ro0i"/></linearGradient><path fill="url(#SVGj4WcwbgV)" class="h4n6ekwws"/><path class="t83du-b-b"/><path class="txnq4cljl"/>`,
		"fallback": "selfhst:opengrammar-light",
	});
}

export default Component;
