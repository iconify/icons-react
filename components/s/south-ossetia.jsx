import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-ifwcixz.css';
import '../../css/y/y60soueiq.css';
import '../../css/v/v2da_1baj.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-ifwcixz"/><path class="y60soueiq"/><path class="v2da_1baj"/>`,
		"fallback": "tabler-flags:south-ossetia",
	});
}

export default Component;
