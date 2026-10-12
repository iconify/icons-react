import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrjmnmpml.css';
import '../../css/b/b595ytj-t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrjmnmpml"/><path class="b595ytj-t"/>`,
		"fallback": "garden:phone-pause-stroke-20",
	});
}

export default Component;
