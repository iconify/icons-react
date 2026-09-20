import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bohhjnb0p.css';
import '../../css/h/hstms5foq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bohhjnb0p"/><path clip-rule="evenodd" class="hstms5foq"/>`,
		"fallback": "teenyicons:png-solid",
	});
}

export default Component;
