import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj4jy0b8n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj4jy0b8n"/>`,
		"fallback": "teenyicons:layers-union-solid",
	});
}

export default Component;
