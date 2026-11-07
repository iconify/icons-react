import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be24kjn_m.css';
import '../../css/e/erff_3del.css';
import '../../css/y/yrcey2bdn.css';
import '../../css/b/biqv3ubbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be24kjn_m"/><path class="erff_3del"/><path class="yrcey2bdn"/><path clip-rule="evenodd" class="biqv3ubbx"/>`,
		"fallback": "solar:remote-controller-minimalistic-bold-duotone",
	});
}

export default Component;
