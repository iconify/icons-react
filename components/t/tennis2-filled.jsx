import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tby6k6z2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tby6k6z2o"/>`,
		"fallback": "reicon:tennis2-filled",
	});
}

export default Component;
