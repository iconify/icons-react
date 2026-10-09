import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsy6m-bng.css';
import '../../css/j/j04z_-bob.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsy6m-bng"/><path class="j04z_-bob"/>`,
		"fallback": "energy-icons:undo-20",
	});
}

export default Component;
