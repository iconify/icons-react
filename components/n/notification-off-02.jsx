import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fh90--bfo.css';
import '../../css/y/yjpa273dk.css';
import '../../css/w/w1c2cz4cz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="fh90--bfo"/><path class="yjpa273dk"/><path class="w1c2cz4cz"/></g>`,
		"fallback": "hugeicons:notification-off-02",
	});
}

export default Component;
