import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clu31pt_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="clu31pt_c"/>`,
		"fallback": "streamline-sharp:text-tracking-solid",
	});
}

export default Component;
