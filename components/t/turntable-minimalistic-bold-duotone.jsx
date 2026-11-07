import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhwu8ubva.css';
import '../../css/y/yp9zqabqo.css';
import '../../css/y/yerjxhd7f.css';
import '../../css/c/c1ao83bub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhwu8ubva"/><path class="yp9zqabqo"/><path class="yerjxhd7f"/><path class="c1ao83bub"/>`,
		"fallback": "solar:turntable-minimalistic-bold-duotone",
	});
}

export default Component;
