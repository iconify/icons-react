import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtefmjolt.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/j/jzfxvzblz.css';
import '../../css/g/gz0i5bqap.css';
import '../../css/o/o-zxexbtq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtefmjolt"/><g class="jn8qy4bru"><path class="jzfxvzblz"/><path class="gz0i5bqap"/><path class="o-zxexbtq"/></g>`,
		"fallback": "openmoji:thong-sandal",
	});
}

export default Component;
