import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5rdgsbpl.css';
import '../../css/i/ipz_6dbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5rdgsbpl"/><path clip-rule="evenodd" class="ipz_6dbqc"/>`,
		"fallback": "basil:location-plus-outline",
	});
}

export default Component;
