import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/r8g3kubio.css';
import '../../css/b/b-b-8eb2h.css';
import '../../css/x/xsvqqibcb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="r8g3kubio"/><path class="b-b-8eb2h"/><ellipse class="xsvqqibcb"/></g>`,
		"fallback": "icon-park-outline:magic-hat",
	});
}

export default Component;
