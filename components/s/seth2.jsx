import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sthgrmhos.css';
import '../../css/p/pcus4nb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sthgrmhos"/><path class="pcus4nb_z"/>`,
		"fallback": "token:seth2",
	});
}

export default Component;
