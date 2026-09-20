import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjh0rhbxf.css';
import '../../css/w/w-b8g4otv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjh0rhbxf"/><path class="w-b8g4otv"/>`,
		"fallback": "streamline-ultimate:rain-umbrella-sun-bold",
	});
}

export default Component;
