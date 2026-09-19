import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/r/rhi_p7bme.css';
import '../../css/l/lq43vqaom.css';
import '../../css/b/b88eryboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="rhi_p7bme"/><path class="lq43vqaom"/><circle class="b88eryboh"/></g>`,
		"fallback": "akar-icons:people-multiple",
	});
}

export default Component;
