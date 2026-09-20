import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lmrq91btd.css';
import '../../css/r/rhi_p7bme.css';
import '../../css/i/idj15fb9a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="lmrq91btd"/><circle class="rhi_p7bme"/><path class="idj15fb9a"/></g>`,
		"fallback": "streamline:travel-airport-passport-travel-book-id-adventure-visa",
	});
}

export default Component;
