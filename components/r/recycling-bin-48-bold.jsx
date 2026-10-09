import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg50c1boz.css';
import '../../css/h/h2mc0zwiz.css';
import '../../css/j/jifmdiwzm.css';
import '../../css/r/rcczl042f.css';
import '../../css/e/e88_ysu2u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg50c1boz"/><path class="h2mc0zwiz"/><path class="jifmdiwzm"/><path class="rcczl042f"/><path class="e88_ysu2u"/>`,
		"fallback": "energy-icons:recycling-bin-48-bold",
	});
}

export default Component;
