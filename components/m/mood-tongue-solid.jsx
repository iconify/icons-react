import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfvpij5gy.css';
import '../../css/j/jdy0pvxyp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfvpij5gy"/><path clip-rule="evenodd" class="jdy0pvxyp"/>`,
		"fallback": "teenyicons:mood-tongue-solid",
	});
}

export default Component;
