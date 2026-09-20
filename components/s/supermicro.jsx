import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugmf8pbol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugmf8pbol"/>`,
		"fallback": "thesvg-color:supermicro",
	});
}

export default Component;
