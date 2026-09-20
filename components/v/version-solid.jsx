import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3bdu_i1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l3bdu_i1p"/>`,
		"fallback": "stash:version-solid",
	});
}

export default Component;
