import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t76xesq6f.css';
import '../../css/s/stwi24bsm.css';
import '../../css/i/ip1zolbgn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t76xesq6f"/><path class="stwi24bsm"/><path class="ip1zolbgn"/>`,
		"fallback": "energy-icons:rcd-20-bold",
	});
}

export default Component;
