import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdftbpbaj.css';
import '../../css/m/m26ewvbtd.css';
import '../../css/g/gw6wfjnqh.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdftbpbaj"/><path class="m26ewvbtd"/><path class="gw6wfjnqh"/>`,
		"fallback": "tabler-flags:turkey",
	});
}

export default Component;
