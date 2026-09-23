import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s5s089bsc.css';
import '../../css/j/j17ier4pi.css';
import '../../css/j/jyq8ydmxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s5s089bsc"/><path class="j17ier4pi"/><path class="jyq8ydmxq"/></g>`,
		"fallback": "keyline-icons:tag-sparkles-duotone",
	});
}

export default Component;
