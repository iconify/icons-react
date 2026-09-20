import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evd8kfjws.css';
import '../../css/h/hxci04b3v.css';
import '../../css/w/wrzgswrqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="evd8kfjws"/><path clip-rule="evenodd" class="hxci04b3v"/><path class="wrzgswrqk"/>`,
		"fallback": "thesvg-color:leptonai",
	});
}

export default Component;
