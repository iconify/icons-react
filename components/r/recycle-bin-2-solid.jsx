import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nio-28yku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nio-28yku"/>`,
		"fallback": "streamline-sharp:recycle-bin-2-solid",
	});
}

export default Component;
