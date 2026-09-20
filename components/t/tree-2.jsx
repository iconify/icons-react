import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeat3sbih.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eeat3sbih"/>`,
		"fallback": "lineicons:tree-2",
	});
}

export default Component;
