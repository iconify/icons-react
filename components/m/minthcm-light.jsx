import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkdv9v2zu.css';
import '../../css/i/ii3ykib-a.css';
import '../../css/k/kqmsxbb1x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkdv9v2zu"/><path class="ii3ykib-a"/><path class="kqmsxbb1x"/>`,
		"fallback": "selfhst:minthcm-light",
	});
}

export default Component;
