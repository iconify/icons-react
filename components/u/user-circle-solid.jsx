import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsatub3fk.css';
import '../../css/c/c2aqpmbiz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsatub3fk"/><path clip-rule="evenodd" class="c2aqpmbiz"/>`,
		"fallback": "teenyicons:user-circle-solid",
	});
}

export default Component;
