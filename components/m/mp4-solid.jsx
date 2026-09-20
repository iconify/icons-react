import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnuh6xh8p.css';
import '../../css/f/fqore9c7i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnuh6xh8p"/><path clip-rule="evenodd" class="fqore9c7i"/>`,
		"fallback": "teenyicons:mp4-solid",
	});
}

export default Component;
