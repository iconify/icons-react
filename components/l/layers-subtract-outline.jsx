import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjwuz851z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjwuz851z"/>`,
		"fallback": "teenyicons:layers-subtract-outline",
	});
}

export default Component;
