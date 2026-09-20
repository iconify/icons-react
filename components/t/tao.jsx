import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhho48bfz.css';
import '../../css/w/wwzz0g8ua.css';
import '../../css/h/hrqogvl7h.css';
import '../../css/c/c8yp3-h5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhho48bfz"/><path class="wwzz0g8ua"/><path class="hrqogvl7h"/><path class="c8yp3-h5i"/>`,
		"fallback": "token:tao",
	});
}

export default Component;
