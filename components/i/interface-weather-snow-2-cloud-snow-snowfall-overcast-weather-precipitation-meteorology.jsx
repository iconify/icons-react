import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xattv9ben.css';
import '../../css/i/ige1qwxfq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xattv9ben"/><path class="ige1qwxfq"/>`,
		"fallback": "streamline:interface-weather-snow-2-cloud-snow-snowfall-overcast-weather-precipitation-meteorology",
	});
}

export default Component;
