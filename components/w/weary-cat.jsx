import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bnu_thbtj.css';
import '../../css/d/dbh9pcbkw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bnu_thbtj"/><path class="dbh9pcbkw"/></g>`,
		"fallback": "fluent-emoji-high-contrast:weary-cat",
	});
}

export default Component;
