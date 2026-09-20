import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyv7au0jr.css';
import '../../css/x/xn30xyltc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyv7au0jr"/><path clip-rule="evenodd" class="xn30xyltc"/>`,
		"fallback": "teenyicons:linux-solid",
	});
}

export default Component;
