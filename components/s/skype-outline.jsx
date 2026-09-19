import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnana9thp.css';
import '../../css/h/hpjr1hd0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnana9thp"/><path clip-rule="evenodd" class="hpjr1hd0g"/>`,
		"fallback": "basil:skype-outline",
	});
}

export default Component;
