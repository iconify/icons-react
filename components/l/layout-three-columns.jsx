import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb9dqsb0o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb9dqsb0o"/>`,
		"fallback": "bi:layout-three-columns",
	});
}

export default Component;
