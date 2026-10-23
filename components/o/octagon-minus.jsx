import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwzdqg8pq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwzdqg8pq"/>`,
		"fallback": "vadivam:octagon-minus",
	});
}

export default Component;
