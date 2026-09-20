import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta2n0gbaw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ta2n0gbaw"/>`,
		"fallback": "streamline-flex:signage-pedestrian-no-crossing-solid",
	});
}

export default Component;
