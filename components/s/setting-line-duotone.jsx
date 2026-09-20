import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouxp0ubsi.css';
import '../../css/v/v4i2ew1ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ouxp0ubsi"/><circle class="v4i2ew1ke"/>`,
		"fallback": "lets-icons:setting-line-duotone",
	});
}

export default Component;
