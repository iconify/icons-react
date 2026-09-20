import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/il0hwjnhw.css';
import '../../css/w/w-_7y_bds.css';
import '../../css/b/bcw8vgbgs.css';
import '../../css/k/kxrlahbnk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="il0hwjnhw"/><path class="w-_7y_bds"/><path class="bcw8vgbgs"/><path class="kxrlahbnk"/></g>`,
		"fallback": "pepicons-pencil:television-play",
	});
}

export default Component;
