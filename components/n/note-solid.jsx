import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tne5lpbaz.css';
import '../../css/t/tylyzabts.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tne5lpbaz"/><path class="tylyzabts"/>`,
		"fallback": "teenyicons:note-solid",
	});
}

export default Component;
