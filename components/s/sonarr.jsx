import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt2kvac7n.css';
import '../../css/p/phq-p1_xp.css';
import '../../css/p/pnsl0jbnl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt2kvac7n"/><path class="phq-p1_xp"/><path class="pnsl0jbnl"/>`,
		"fallback": "selfhst:sonarr",
	});
}

export default Component;
