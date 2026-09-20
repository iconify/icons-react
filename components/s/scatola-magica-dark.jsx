import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9bllgb-i.css';
import '../../css/s/sbfj-0zmi.css';
import '../../css/j/jh6xwxbpv.css';
import '../../css/w/wv69ft2op.css';
import '../../css/d/dp94l_bay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9bllgb-i"/><path class="sbfj-0zmi"/><path class="jh6xwxbpv"/><path class="wv69ft2op"/><path class="dp94l_bay"/>`,
		"fallback": "selfhst:scatola-magica-dark",
	});
}

export default Component;
