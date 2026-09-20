import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upoh5b8jj.css';
import '../../css/d/dca1hzb9h.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/zvlp41bor.css';
import '../../css/e/el7kd0g5t.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upoh5b8jj"/><path class="dca1hzb9h"/><g class="jn8qy4bru"><path class="zvlp41bor"/><path class="el7kd0g5t"/></g>`,
		"fallback": "openmoji:salt-mill",
	});
}

export default Component;
