import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx94_1hhr.css';
import '../../css/t/tde2ctmpe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tx94_1hhr"/><path clip-rule="evenodd" class="tde2ctmpe"/>`,
		"fallback": "qlementine-icons:memory-16",
	});
}

export default Component;
