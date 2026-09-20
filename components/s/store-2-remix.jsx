import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg-68ml4f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gg-68ml4f"/>`,
		"fallback": "streamline-flex:store-2-remix",
	});
}

export default Component;
