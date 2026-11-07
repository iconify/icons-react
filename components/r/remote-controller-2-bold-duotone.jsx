import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be24kjn_m.css';
import '../../css/k/k85rg8b0j.css';
import '../../css/k/ky3o20byt.css';
import '../../css/p/ps2m0xfqt.css';
import '../../css/h/h3x8wxboy.css';
import '../../css/m/mybsyle5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be24kjn_m"/><path class="k85rg8b0j"/><path class="ky3o20byt"/><path class="ps2m0xfqt"/><path class="h3x8wxboy"/><path clip-rule="evenodd" class="mybsyle5g"/>`,
		"fallback": "solar:remote-controller-2-bold-duotone",
	});
}

export default Component;
