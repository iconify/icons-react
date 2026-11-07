import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdarr4bmq.css';
import '../../css/h/hqrr-dbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bdarr4bmq"/><path class="hqrr-dbpn"/>`,
		"fallback": "solar:list-arrow-up-minimalistic-bold-duotone",
	});
}

export default Component;
