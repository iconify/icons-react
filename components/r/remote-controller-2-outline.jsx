import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps2jawg_f.css';
import '../../css/k/k85rg8b0j.css';
import '../../css/e/ethuhhm8e.css';
import '../../css/p/ps2m0xfqt.css';
import '../../css/w/w2m-ufbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ps2jawg_f"/><path class="k85rg8b0j"/><path class="ethuhhm8e"/><path class="ps2m0xfqt"/><path class="w2m-ufbat"/>`,
		"fallback": "solar:remote-controller-2-outline",
	});
}

export default Component;
