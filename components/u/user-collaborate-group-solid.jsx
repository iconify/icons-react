import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so2n3wg9m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="so2n3wg9m"/>`,
		"fallback": "streamline-flex:user-collaborate-group-solid",
	});
}

export default Component;
