import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nds9cwbgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nds9cwbgt"/>`,
		"fallback": "basil:unlock-solid",
	});
}

export default Component;
