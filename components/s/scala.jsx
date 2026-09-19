import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md7chzk7w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md7chzk7w"/>`,
		"fallback": "devicon-plain:scala",
	});
}

export default Component;
