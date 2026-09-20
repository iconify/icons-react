import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1e674bmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1e674bmg"/>`,
		"fallback": "thesvg-color:toml",
	});
}

export default Component;
