import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa1wb8bix.css';
import '../../css/w/wrryygb0v.css';
import '../../css/m/m5hb6s3rs.css';
import '../../css/d/dyutw95lp.css';
import '../../css/d/d7gazbcaz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa1wb8bix"/><path class="wrryygb0v"/><path class="m5hb6s3rs"/><path class="dyutw95lp"/><path class="d7gazbcaz"/>`,
		"fallback": "fxemoji:violin",
	});
}

export default Component;
