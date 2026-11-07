import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt-_h2mmy.css';
import '../../css/g/ge8axobmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nt-_h2mmy"/><path class="ge8axobmf"/>`,
		"fallback": "solar:link-round-angle-bold-duotone",
	});
}

export default Component;
