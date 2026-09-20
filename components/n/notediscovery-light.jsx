import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/t/tb9i-5hiz.css';
import '../../css/k/kio5svbfy.css';
import '../../css/f/f63235bvq.css';
import '../../css/f/fcmgnqyju.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGbsx0nxiB" x1="18.297" x2="493.703" y1="18.297" y2="493.703" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="tb9i-5hiz"/></linearGradient><path fill="url(#SVGbsx0nxiB)" class="kio5svbfy"/><path class="f63235bvq"/><circle class="fcmgnqyju"/>`,
		"fallback": "selfhst:notediscovery-light",
	});
}

export default Component;
