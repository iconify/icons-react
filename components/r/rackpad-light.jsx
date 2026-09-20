import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu8n2uq5t.css';
import '../../css/k/kuf48lbbq.css';
import '../../css/v/v2c8ogbfr.css';
import '../../css/v/v3zukqwqr.css';
import '../../css/a/avv3qpdgn.css';
import '../../css/g/gsn16rx_z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu8n2uq5t"/><path class="kuf48lbbq"/><path class="v2c8ogbfr"/><path class="v3zukqwqr"/><path class="avv3qpdgn"/><path class="gsn16rx_z"/>`,
		"fallback": "selfhst:rackpad-light",
	});
}

export default Component;
