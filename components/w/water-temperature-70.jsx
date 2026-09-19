import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyhlb4b3m.css';

const viewBox = {"width":528,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyhlb4b3m"/>`,
		"fallback": "ps:water-temperature-70",
	});
}

export default Component;
