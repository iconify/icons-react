import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2_9e0yug.css';
import '../../css/l/lupyzslyb.css';
import '../../css/u/u64cjhbzz.css';
import '../../css/t/tk5imdb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n2_9e0yug"/><path class="lupyzslyb"/><path class="u64cjhbzz"/><path class="tk5imdb6f"/></g>`,
		"fallback": "tdesign:rocket",
	});
}

export default Component;
