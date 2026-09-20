import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/vmekasbbn.css';
import '../../css/n/nn-qepbqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="vmekasbbn"/><path class="nn-qepbqd"/></g>`,
		"fallback": "streamline-ultimate:rain-umbrella-1",
	});
}

export default Component;
