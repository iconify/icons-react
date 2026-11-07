import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycq6r6b3w.css';
import '../../css/a/a2habdbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycq6r6b3w"/><path clip-rule="evenodd" class="a2habdbvq"/>`,
		"fallback": "solar:safe-square-bold",
	});
}

export default Component;
