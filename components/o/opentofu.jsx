import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on8hwbb2t.css';
import '../../css/j/j5w63191d.css';
import '../../css/q/qh5kw87ul.css';
import '../../css/j/jb-tw-g9m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on8hwbb2t"/><path class="j5w63191d"/><path class="qh5kw87ul"/><path class="jb-tw-g9m"/>`,
		"fallback": "selfhst:opentofu",
	});
}

export default Component;
