import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjp_koc1i.css';
import '../../css/l/l6yehs63f.css';
import '../../css/g/ghhg-0_2c.css';
import '../../css/u/uj_9lubin.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjp_koc1i"/><path class="l6yehs63f"/><circle class="ghhg-0_2c"/><path class="uj_9lubin"/>`,
		"fallback": "fxemoji:lollipop",
	});
}

export default Component;
