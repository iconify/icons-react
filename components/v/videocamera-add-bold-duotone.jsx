import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn_f1tn5f.css';
import '../../css/n/n4onjj4ki.css';
import '../../css/d/dxbitbv-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn_f1tn5f"/><path class="n4onjj4ki"/><path class="dxbitbv-f"/>`,
		"fallback": "solar:videocamera-add-bold-duotone",
	});
}

export default Component;
