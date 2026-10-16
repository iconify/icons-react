import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxvm5wu2l.css';
import '../../css/c/c65-ehvfy.css';
import '../../css/y/yk3wkwcoj.css';
import '../../css/q/q8r5bs2wd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxvm5wu2l"/><path class="c65-ehvfy"/><path class="yk3wkwcoj"/><path class="q8r5bs2wd"/>`,
		"fallback": "energy-icons:shed-48",
	});
}

export default Component;
