import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btkhb9bet.css';
import '../../css/l/lgjjwacpx.css';
import '../../css/y/yhqqnybey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="btkhb9bet"/><path clip-rule="evenodd" class="lgjjwacpx"/><path class="yhqqnybey"/>`,
		"fallback": "solar:map-point-school-bold",
	});
}

export default Component;
