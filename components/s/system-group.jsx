import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paurdn42f.css';
import '../../css/w/ws0xuezat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paurdn42f"/><path class="ws0xuezat"/>`,
		"fallback": "eos-icons:system-group",
	});
}

export default Component;
