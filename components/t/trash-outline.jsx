import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a81mfig0j.css';
import '../../css/s/ssrw9lb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a81mfig0j"/><path clip-rule="evenodd" class="ssrw9lb7d"/>`,
		"fallback": "basil:trash-outline",
	});
}

export default Component;
