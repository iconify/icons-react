import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eimvo_btn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eimvo_btn"/>`,
		"fallback": "pinhead:manhole-cover-with-gas-flame",
	});
}

export default Component;
