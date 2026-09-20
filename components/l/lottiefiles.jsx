import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnw54xggm.css';
import '../../css/v/vi0lh-h6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnw54xggm"/><path class="vi0lh-h6r"/>`,
		"fallback": "uim:lottiefiles",
	});
}

export default Component;
