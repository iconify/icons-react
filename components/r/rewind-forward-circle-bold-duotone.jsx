import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnb90nbxf.css';
import '../../css/s/sp3f8uwqx.css';
import '../../css/w/we9_13rpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnb90nbxf"/><path class="sp3f8uwqx"/><path class="we9_13rpl"/>`,
		"fallback": "solar:rewind-forward-circle-bold-duotone",
	});
}

export default Component;
