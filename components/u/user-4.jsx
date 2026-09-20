import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae0kc3blq.css';
import '../../css/r/r8w6x7bjy.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ae0kc3blq"/><path class="r8w6x7bjy"/>`,
		"fallback": "lineicons:user-4",
	});
}

export default Component;
