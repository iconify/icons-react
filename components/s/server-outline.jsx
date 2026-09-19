import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2ia5obuy.css';
import '../../css/u/umym_-bpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2ia5obuy"/><path clip-rule="evenodd" class="umym_-bpi"/>`,
		"fallback": "basil:server-outline",
	});
}

export default Component;
