import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gphtcn8kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gphtcn8kb"/>`,
		"fallback": "lucide:tally-5",
	});
}

export default Component;
