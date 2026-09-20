import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhroet0on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhroet0on"/>`,
		"fallback": "ri:number-2",
	});
}

export default Component;
