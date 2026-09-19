import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/q/qv6px5fsd.css';
import '../../css/g/gxvdf_hdg.css';
import '../../css/j/j_wj-105g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="qv6px5fsd"/><path class="gxvdf_hdg"/><path class="j_wj-105g"/></g>`,
		"fallback": "icon-park:phone-outgoing-one",
	});
}

export default Component;
