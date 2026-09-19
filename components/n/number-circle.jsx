import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p51bqzbjk.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p51bqzbjk"/>`,
		"fallback": "f7:number-circle",
	});
}

export default Component;
