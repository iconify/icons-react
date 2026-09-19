import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eecf0ebiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eecf0ebiw"/>`,
		"fallback": "gg:slack",
	});
}

export default Component;
