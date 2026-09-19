import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbl60data.css';
import '../../css/t/ty9-8db6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbl60data"/><path class="ty9-8db6f"/>`,
		"fallback": "boxicons:printer",
	});
}

export default Component;
