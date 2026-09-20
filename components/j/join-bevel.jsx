import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbgyefbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbgyefbfc"/>`,
		"fallback": "tabler:join-bevel",
	});
}

export default Component;
