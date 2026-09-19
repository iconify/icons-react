import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2yx2bcgg.css';
import '../../css/u/urz-4cihd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2yx2bcgg"/><circle class="urz-4cihd"/>`,
		"fallback": "eos-icons:trusted-organization",
	});
}

export default Component;
