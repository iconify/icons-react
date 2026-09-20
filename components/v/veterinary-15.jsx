import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbpyq5b3v.css';
import '../../css/z/zhdnh2bha.css';
import '../../css/o/otpwwz6mk.css';
import '../../css/k/ki1-rrbrr.css';
import '../../css/z/z361stntw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbpyq5b3v"/><path class="zhdnh2bha"/><path class="otpwwz6mk"/><path class="ki1-rrbrr"/><path class="z361stntw"/>`,
		"fallback": "maki:veterinary-15",
	});
}

export default Component;
