import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs3jkhbrx.css';
import '../../css/p/paodlxbin.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs3jkhbrx"/><path class="paodlxbin"/>`,
		"fallback": "energy-icons:plug-uk-20-bold",
	});
}

export default Component;
