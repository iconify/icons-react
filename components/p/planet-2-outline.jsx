import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb99incev.css';
import '../../css/l/loow9ybwq.css';
import '../../css/o/ocn83zybz.css';
import '../../css/a/a453s8nfz.css';
import '../../css/n/n1grccb5d.css';
import '../../css/o/onsgwijlx.css';
import '../../css/u/uthzbm34d.css';
import '../../css/f/fjawlt9ec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb99incev"/><path class="loow9ybwq"/><path clip-rule="evenodd" class="ocn83zybz"/><path class="a453s8nfz"/><path class="n1grccb5d"/><path class="onsgwijlx"/><path class="uthzbm34d"/><path class="fjawlt9ec"/>`,
		"fallback": "solar:planet-2-outline",
	});
}

export default Component;
