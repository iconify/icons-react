import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syr7h0fyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="syr7h0fyg"/>`,
		"fallback": "streamline-freehand:toilet-no-trash-throw",
	});
}

export default Component;
