import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zfezss9-t.css';
import '../../css/n/n7m50mbkz.css';
import '../../css/u/uybo7jhha.css';
import '../../css/m/mutr7zrvo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zfezss9-t"/><path class="n7m50mbkz"/><path class="uybo7jhha"/><path class="mutr7zrvo"/></g>`,
		"fallback": "fluent-emoji-high-contrast:old-woman",
	});
}

export default Component;
