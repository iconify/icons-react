import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx8a74d0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx8a74d0s"/>`,
		"fallback": "tabler:package-import",
	});
}

export default Component;
