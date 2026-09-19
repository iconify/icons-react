import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg4id_vou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eg4id_vou"/>`,
		"fallback": "heroicons:percent-badge-solid",
	});
}

export default Component;
