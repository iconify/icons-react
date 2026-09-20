import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgdh1dbhf.css';
import '../../css/p/pds7e2php.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sgdh1dbhf"/><path class="pds7e2php"/>`,
		"fallback": "solar:plain-2-bold-duotone",
	});
}

export default Component;
