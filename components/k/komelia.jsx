import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usv905b_v.css';
import '../../css/t/tnhvtrfme.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="usv905b_v"/><path class="tnhvtrfme"/>`,
		"fallback": "selfhst:komelia",
	});
}

export default Component;
