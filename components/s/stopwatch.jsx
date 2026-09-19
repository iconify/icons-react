import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v-0rjvvza.css';
import '../../css/x/xeuun3anw.css';
import '../../css/x/xefukylla.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v-0rjvvza"/><path class="xeuun3anw"/><path class="xefukylla"/></g>`,
		"fallback": "pepicons:stopwatch",
	});
}

export default Component;
