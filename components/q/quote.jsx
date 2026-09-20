import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2lxspncn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h2lxspncn"/>`,
		"fallback": "pajamas:quote",
	});
}

export default Component;
