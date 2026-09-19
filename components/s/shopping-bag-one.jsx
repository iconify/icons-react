import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/g_w3_soty.css';
import '../../css/g/g3guvac8w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="g_w3_soty"/><path class="g3guvac8w"/></g>`,
		"fallback": "icon-park:shopping-bag-one",
	});
}

export default Component;
