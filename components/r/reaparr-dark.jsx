import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r22q9yb_l.css';
import '../../css/f/fjrtewbbl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r22q9yb_l"/><path class="fjrtewbbl"/>`,
		"fallback": "selfhst:reaparr-dark",
	});
}

export default Component;
