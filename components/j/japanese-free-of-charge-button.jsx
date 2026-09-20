import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb86tmbeq.css';
import '../../css/k/kzzm43b9d.css';
import '../../css/u/uqdx0rv-g.css';
import '../../css/b/b6fm3lb8h.css';
import '../../css/b/bgoiz_vvb.css';
import '../../css/d/de3w63b-l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb86tmbeq"/><g clip-rule="evenodd" class="kzzm43b9d"><path class="uqdx0rv-g"/><path class="b6fm3lb8h"/><path class="bgoiz_vvb"/><path class="de3w63b-l"/></g>`,
		"fallback": "openmoji:japanese-free-of-charge-button",
	});
}

export default Component;
