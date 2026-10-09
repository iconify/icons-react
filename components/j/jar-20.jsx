import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpf2n7b-t.css';
import '../../css/v/vltu6acye.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpf2n7b-t"/><path class="vltu6acye"/>`,
		"fallback": "energy-icons:jar-20",
	});
}

export default Component;
