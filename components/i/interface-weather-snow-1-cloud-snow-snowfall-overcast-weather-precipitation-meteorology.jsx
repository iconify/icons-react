import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xattv9ben.css';
import '../../css/l/lnzfgtbbp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xattv9ben"/><path class="lnzfgtbbp"/>`,
		"fallback": "streamline:interface-weather-snow-1-cloud-snow-snowfall-overcast-weather-precipitation-meteorology",
	});
}

export default Component;
