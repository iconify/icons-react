import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atfy2eibq.css';
import '../../css/z/zz0oiz_vk.css';
import '../../css/b/b72d3_baj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atfy2eibq"/><path class="zz0oiz_vk"/><path class="b72d3_baj"/>`,
		"fallback": "energy-icons:rainbow-48-bold",
	});
}

export default Component;
