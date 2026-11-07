import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/souitub5j.css';
import '../../css/z/zfnhitbjm.css';
import '../../css/w/w4akaab9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="souitub5j"/><path class="zfnhitbjm"/><path clip-rule="evenodd" class="w4akaab9h"/>`,
		"fallback": "solar:shop-2-bold-duotone",
	});
}

export default Component;
