import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz1ndg0wh.css';
import '../../css/j/j32tdeceo.css';
import '../../css/g/g8_zh9beg.css';
import '../../css/u/upj5apbhk.css';
import '../../css/k/kpe3g2b0m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="uz1ndg0wh"><path class="j32tdeceo"/><path class="g8_zh9beg"/><path class="upj5apbhk"/><path class="kpe3g2b0m"/></g>`,
		"fallback": "icon-park:period",
	});
}

export default Component;
