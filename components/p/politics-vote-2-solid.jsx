import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_uydcygs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y_uydcygs"/>`,
		"fallback": "streamline-sharp:politics-vote-2-solid",
	});
}

export default Component;
