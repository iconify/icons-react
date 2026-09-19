import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtx1xb55s.css';
import '../../css/w/wfevvhiis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtx1xb55s"/><path class="wfevvhiis"/>`,
		"fallback": "ci:message-plus-alt",
	});
}

export default Component;
