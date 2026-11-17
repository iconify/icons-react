import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgk61_5ts.css';
import '../../css/i/i4y13ubio.css';
import '../../css/n/n-f605bde.css';
import '../../css/w/wzmyd8b0t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgk61_5ts"/><path class="i4y13ubio"/><path class="n-f605bde"/><path class="wzmyd8b0t"/>`,
		"fallback": "selfhst:seamside-light",
	});
}

export default Component;
