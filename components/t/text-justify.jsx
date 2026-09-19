import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmcspk2nx.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmcspk2nx"/>`,
		"fallback": "f7:text-justify",
	});
}

export default Component;
