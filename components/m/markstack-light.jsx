import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4gyquu4g.css';
import '../../css/k/kuyk5mn6b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4gyquu4g"/><path class="kuyk5mn6b"/>`,
		"fallback": "selfhst:markstack-light",
	});
}

export default Component;
