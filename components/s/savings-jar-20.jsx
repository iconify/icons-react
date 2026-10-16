import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c59tb1b5l.css';
import '../../css/b/b18xgubfy.css';
import '../../css/o/onc6e2gme.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c59tb1b5l"/><path class="b18xgubfy"/><path class="onc6e2gme"/>`,
		"fallback": "energy-icons:savings-jar-20",
	});
}

export default Component;
