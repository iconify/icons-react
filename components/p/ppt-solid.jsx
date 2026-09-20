import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spcbx1-oy.css';
import '../../css/b/beu2x0b4j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spcbx1-oy"/><path clip-rule="evenodd" class="beu2x0b4j"/>`,
		"fallback": "teenyicons:ppt-solid",
	});
}

export default Component;
