import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkeomkbnh.css';
import '../../css/e/epnvafbwy.css';
import '../../css/a/aqhljpb_o.css';
import '../../css/a/a59ht-bqk.css';
import '../../css/j/jjiido17l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path fill="url(#SVGotsgfeDB)" class="qkeomkbnh"/><path fill="url(#SVGotsgfeDB)" class="epnvafbwy"/><path fill="url(#SVGotsgfeDB)" class="aqhljpb_o"/><defs><linearGradient id="SVGotsgfeDB" x1="0" x2="23.45" y1="11.5" y2="15.091" gradientUnits="userSpaceOnUse"><stop class="a59ht-bqk"/><stop offset="1" class="jjiido17l"/></linearGradient></defs>`,
		"fallback": "thesvg-color:tiangong",
	});
}

export default Component;
