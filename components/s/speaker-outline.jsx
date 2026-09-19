import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucgba-79t.css';
import '../../css/y/yeeel25yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucgba-79t"/><path class="yeeel25yq"/>`,
		"fallback": "eva:speaker-outline",
	});
}

export default Component;
