import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofvb_sb4h.css';
import '../../css/h/h-ft_9bvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofvb_sb4h"/><path clip-rule="evenodd" class="h-ft_9bvv"/>`,
		"fallback": "lineicons:laptop-phone",
	});
}

export default Component;
