import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb-3h3i8a.css';
import '../../css/t/ttn15vtks.css';
import '../../css/w/wycr1gktp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qb-3h3i8a"/><path clip-rule="evenodd" class="ttn15vtks"/><path class="wycr1gktp"/>`,
		"fallback": "solar:plus-minus-bold-duotone",
	});
}

export default Component;
