import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_30xc53y.css';
import '../../css/a/a2zaddc-d.css';
import '../../css/b/bid0ecc1g.css';
import '../../css/x/xefyw8bax.css';
import '../../css/c/cnsrnd-wz.css';
import '../../css/v/vm54w180n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_30xc53y"/><path class="a2zaddc-d"/><path class="bid0ecc1g"/><path class="xefyw8bax"/><path class="cnsrnd-wz"/><path class="vm54w180n"/>`,
		"fallback": "solar:object-scan-bold-duotone",
	});
}

export default Component;
