import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m18fk9bwq.css';

const viewBox = {"width":528,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m18fk9bwq"/>`,
		"fallback": "ps:water-temperature-30",
	});
}

export default Component;
