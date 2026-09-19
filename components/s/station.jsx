import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xmdleo1yt.css';
import '../../css/c/cwvw2cbdu.css';
import '../../css/v/v8kz5ne8r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xmdleo1yt"/><path class="cwvw2cbdu"/><path class="v8kz5ne8r"/></g>`,
		"fallback": "fluent-emoji-high-contrast:station",
	});
}

export default Component;
