import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnm8-ik_p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bnm8-ik_p"/>`,
		"fallback": "streamline-flex:projector-remix",
	});
}

export default Component;
