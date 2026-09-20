import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkwno1bos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkwno1bos"/>`,
		"fallback": "tabler:rocking-chair",
	});
}

export default Component;
