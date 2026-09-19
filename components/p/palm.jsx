import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g54fotb1f.css';
import '../../css/p/pvs4vzbqe.css';
import '../../css/j/jgxrsjbxi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="g54fotb1f"><path class="pvs4vzbqe"/><rect class="jgxrsjbxi"/></g>`,
		"fallback": "icon-park-solid:palm",
	});
}

export default Component;
