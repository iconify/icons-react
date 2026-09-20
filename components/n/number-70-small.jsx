import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpcu1cy2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpcu1cy2h"/>`,
		"fallback": "tabler:number-70-small",
	});
}

export default Component;
