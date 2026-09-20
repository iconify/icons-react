import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6rtoj05l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r6rtoj05l"/>`,
		"fallback": "streamline:pie-chart-remix",
	});
}

export default Component;
