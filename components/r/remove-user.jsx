import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym39ndb8w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym39ndb8w"/>`,
		"fallback": "icons8:remove-user",
	});
}

export default Component;
