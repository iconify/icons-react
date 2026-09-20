import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymlmo2owc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ymlmo2owc"/>`,
		"fallback": "teenyicons:tick-circle-solid",
	});
}

export default Component;
