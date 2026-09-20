import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psk9w-asf.css';
import '../../css/m/mqh2rrbti.css';
import '../../css/s/sb8cqvbau.css';
import '../../css/i/iypdzxlxq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psk9w-asf"/><path class="mqh2rrbti"/><path class="sb8cqvbau"/><circle class="iypdzxlxq"/>`,
		"fallback": "selfhst:spacepad",
	});
}

export default Component;
