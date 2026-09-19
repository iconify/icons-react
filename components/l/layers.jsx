import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pojyyg07n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pojyyg07n"/>`,
		"fallback": "f7:layers",
	});
}

export default Component;
