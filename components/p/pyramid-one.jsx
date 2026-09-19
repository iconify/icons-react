import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/uj507xj1f.css';
import '../../css/l/lhllv9bxt.css';
import '../../css/d/dgn0rl2ke.css';
import '../../css/r/rdjwzdbya.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="uj507xj1f"/><path class="lhllv9bxt"/><path class="dgn0rl2ke"/><path class="rdjwzdbya"/></g>`,
		"fallback": "icon-park-outline:pyramid-one",
	});
}

export default Component;
