import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydcy8zb4e.css';
import '../../css/i/iflf88bro.css';
import '../../css/e/eh9flzbxf.css';
import '../../css/x/x-ei2vb_x.css';
import '../../css/v/v7tmsmvfc.css';
import '../../css/r/ru9_ou8gx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydcy8zb4e"/><path class="iflf88bro"/><path class="eh9flzbxf"/><path class="x-ei2vb_x"/><path class="v7tmsmvfc"/><path class="ru9_ou8gx"/>`,
		"fallback": "selfhst:solarassistant-dark",
	});
}

export default Component;
