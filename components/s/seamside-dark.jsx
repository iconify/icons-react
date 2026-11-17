import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl-0u3b3j.css';
import '../../css/w/wso4qob3f.css';
import '../../css/i/i4z-g0qwt.css';
import '../../css/d/dehkihbqm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl-0u3b3j"/><path class="wso4qob3f"/><path class="i4z-g0qwt"/><path class="dehkihbqm"/>`,
		"fallback": "selfhst:seamside-dark",
	});
}

export default Component;
