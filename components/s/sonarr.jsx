import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeb7o8bgl.css';
import '../../css/p/phq-p1_xp.css';
import '../../css/t/t12_olc7x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeb7o8bgl"/><path class="phq-p1_xp"/><path class="t12_olc7x"/>`,
		"fallback": "selfhst:sonarr",
	});
}

export default Component;
