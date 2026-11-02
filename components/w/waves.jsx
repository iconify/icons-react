import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/hek03ebjy.css';
import '../../css/a/azso1xmvh.css';
import '../../css/s/sjhb3lgcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="hek03ebjy"/><path class="azso1xmvh"/><path class="sjhb3lgcb"/></g>`,
		"fallback": "matita:waves",
	});
}

export default Component;
