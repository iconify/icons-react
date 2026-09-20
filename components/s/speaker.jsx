import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o7ts12btk.css';
import '../../css/b/bwujhmd2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o7ts12btk"/><path class="bwujhmd2u"/></g>`,
		"fallback": "mynaui:speaker",
	});
}

export default Component;
