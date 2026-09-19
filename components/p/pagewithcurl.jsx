import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzdetfb7j.css';
import '../../css/w/w8qy4b3yq.css';
import '../../css/r/r83kv-bnq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzdetfb7j"/><path class="w8qy4b3yq"/><path class="r83kv-bnq"/>`,
		"fallback": "fxemoji:pagewithcurl",
	});
}

export default Component;
