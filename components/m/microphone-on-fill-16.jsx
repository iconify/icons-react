import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nnbe3gbbj.css';
import '../../css/f/fijsiubsv.css';
import '../../css/p/p9dzneb6v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="nnbe3gbbj"/><path class="fijsiubsv"/></g><path class="p9dzneb6v"/>`,
		"fallback": "garden:microphone-on-fill-16",
	});
}

export default Component;
