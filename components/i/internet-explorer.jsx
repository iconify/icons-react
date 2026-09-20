import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r__b508me.css';
import '../../css/z/zmgukn87m.css';
import '../../css/m/mciw7cbxm.css';
import '../../css/m/mk8j1hbvx.css';
import '../../css/l/lx4e1bcrw.css';
import '../../css/f/fd9rcw-jn.css';
import '../../css/z/z8pg8nbbq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r__b508me"/><g class="zmgukn87m"><path class="mciw7cbxm"/><path class="mk8j1hbvx"/></g><path class="lx4e1bcrw"/><path class="fd9rcw-jn"/><path class="z8pg8nbbq"/>`,
		"fallback": "openmoji:internet-explorer",
	});
}

export default Component;
