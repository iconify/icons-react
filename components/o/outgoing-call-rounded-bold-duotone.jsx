import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx1qmxb2o.css';
import '../../css/s/s02o69bfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx1qmxb2o"/><path class="s02o69bfv"/>`,
		"fallback": "solar:outgoing-call-rounded-bold-duotone",
	});
}

export default Component;
