import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v109n08_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v109n08_b"/>`,
		"fallback": "vadivam:rss",
	});
}

export default Component;
