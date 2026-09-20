import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r88yrtzkl.css';
import '../../css/a/al9hzkb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r88yrtzkl"/><path class="al9hzkb7s"/>`,
		"fallback": "pixel:octagon-times",
	});
}

export default Component;
