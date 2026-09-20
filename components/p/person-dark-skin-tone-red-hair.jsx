import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avpk_juuj.css';
import '../../css/k/klvkfg0ou.css';
import '../../css/y/ymt7w5b9t.css';
import '../../css/u/uzuqrzw6n.css';
import '../../css/j/j6hawpz5m.css';
import '../../css/p/pajctb-_b.css';
import '../../css/y/yncmw5qii.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avpk_juuj"/><path class="klvkfg0ou"/><path class="ymt7w5b9t"/><path class="uzuqrzw6n"/><path class="j6hawpz5m"/><path class="pajctb-_b"/><path class="yncmw5qii"/>`,
		"fallback": "openmoji:person-dark-skin-tone-red-hair",
	});
}

export default Component;
