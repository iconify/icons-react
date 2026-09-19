import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/ses50vbau.css';
import '../../css/m/mc83_4bhu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ses50vbau"/><path class="mc83_4bhu"/></g>`,
		"fallback": "at-icons:oven",
	});
}

export default Component;
