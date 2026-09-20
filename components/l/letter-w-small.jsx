import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z49bk64vw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z49bk64vw"/>`,
		"fallback": "tabler:letter-w-small",
	});
}

export default Component;
