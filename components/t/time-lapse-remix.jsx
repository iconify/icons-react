import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orby3sqlt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="orby3sqlt"/>`,
		"fallback": "streamline-flex:time-lapse-remix",
	});
}

export default Component;
