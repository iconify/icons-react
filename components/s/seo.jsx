import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/ch7leyxhy.css';
import '../../css/z/zli5stb1l.css';
import '../../css/w/w22fc006e.css';
import '../../css/a/a4sjd5ble.css';
import '../../css/l/ldfti25-z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="ch7leyxhy"/><path class="zli5stb1l"/><path class="w22fc006e"/><path class="a4sjd5ble"/><rect class="ldfti25-z"/></g>`,
		"fallback": "icon-park:seo",
	});
}

export default Component;
