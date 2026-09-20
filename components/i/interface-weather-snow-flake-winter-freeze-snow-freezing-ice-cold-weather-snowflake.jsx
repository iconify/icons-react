import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd275sbvw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd275sbvw"/>`,
		"fallback": "streamline:interface-weather-snow-flake-winter-freeze-snow-freezing-ice-cold-weather-snowflake",
	});
}

export default Component;
