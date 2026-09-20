import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aygw_60rm.css';
import '../../css/d/dzoyk5cfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aygw_60rm"/><path clip-rule="evenodd" class="dzoyk5cfz"/>`,
		"fallback": "solar:minimalistic-magnifer-zoom-out-bold-duotone",
	});
}

export default Component;
