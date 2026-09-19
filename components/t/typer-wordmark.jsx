import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx_6q807q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx_6q807q"/>`,
		"fallback": "devicon-plain:typer-wordmark",
	});
}

export default Component;
