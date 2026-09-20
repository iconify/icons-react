import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq3bjyb8c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq3bjyb8c"/>`,
		"fallback": "temaki:storage",
	});
}

export default Component;
