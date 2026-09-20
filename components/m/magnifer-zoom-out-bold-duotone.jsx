import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aygw_60rm.css';
import '../../css/h/h09tvusar.css';
import '../../css/q/qy2alob5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aygw_60rm"/><path class="h09tvusar"/><path clip-rule="evenodd" class="qy2alob5l"/>`,
		"fallback": "solar:magnifer-zoom-out-bold-duotone",
	});
}

export default Component;
