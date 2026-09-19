import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6zykjo1m.css';
import '../../css/i/iswtnbc3q.css';
import '../../css/j/jcu975bro.css';
import '../../css/v/vdjukgb6m.css';
import '../../css/f/f2pbm3k3l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6zykjo1m"/><path class="iswtnbc3q"/><path class="jcu975bro"/><path class="vdjukgb6m"/><path class="f2pbm3k3l"/>`,
		"fallback": "carbon:registration",
	});
}

export default Component;
