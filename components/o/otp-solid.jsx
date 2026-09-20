import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyystr3mw.css';
import '../../css/k/ko29mcbdr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyystr3mw"/><path clip-rule="evenodd" class="ko29mcbdr"/>`,
		"fallback": "teenyicons:otp-solid",
	});
}

export default Component;
