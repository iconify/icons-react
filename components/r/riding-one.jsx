import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/muhpohbqa.css';
import '../../css/d/dddng97uq.css';
import '../../css/r/r4lh1ibfe.css';
import '../../css/q/qkiuolbwp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="muhpohbqa"/><path class="dddng97uq"/><path class="r4lh1ibfe"/><path class="qkiuolbwp"/></g>`,
		"fallback": "icon-park-outline:riding-one",
	});
}

export default Component;
