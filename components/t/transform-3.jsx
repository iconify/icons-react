import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrj1g3mhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrj1g3mhe"/>`,
		"fallback": "tdesign:transform-3",
	});
}

export default Component;
