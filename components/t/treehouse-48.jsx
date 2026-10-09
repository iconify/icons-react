import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw7dxmg3c.css';
import '../../css/b/bn1-6gkhr.css';
import '../../css/w/wep3g8b9u.css';
import '../../css/b/byu7we9hs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw7dxmg3c"/><path class="bn1-6gkhr"/><path class="wep3g8b9u"/><path class="byu7we9hs"/>`,
		"fallback": "energy-icons:treehouse-48",
	});
}

export default Component;
