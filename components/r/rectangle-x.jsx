import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/x/xr-qo0lhr.css';
import '../../css/x/xangi0z_b.css';
import '../../css/y/y113g6bmt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="xr-qo0lhr"/><path class="xangi0z_b"/><path class="y113g6bmt"/></g>`,
		"fallback": "icon-park:rectangle-x",
	});
}

export default Component;
