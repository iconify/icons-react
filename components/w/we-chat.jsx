import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rptrf_b-m.css';
import '../../css/p/pghzzobog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rptrf_b-m"/><path class="pghzzobog"/>`,
		"fallback": "mage:we-chat",
	});
}

export default Component;
