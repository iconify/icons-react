import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_ghebcwv.css';
import '../../css/f/f7hsq-06y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_ghebcwv"/><path clip-rule="evenodd" class="f7hsq-06y"/>`,
		"fallback": "teenyicons:skull-solid",
	});
}

export default Component;
