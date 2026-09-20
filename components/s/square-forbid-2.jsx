import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtaw4jumw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtaw4jumw"/>`,
		"fallback": "tabler:square-forbid-2",
	});
}

export default Component;
