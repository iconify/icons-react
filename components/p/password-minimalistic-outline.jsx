import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwsxc47kb.css';
import '../../css/k/kkhl62fff.css';
import '../../css/o/o-v99zb0r.css';
import '../../css/h/hc3npei1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwsxc47kb"/><path class="kkhl62fff"/><path class="o-v99zb0r"/><path clip-rule="evenodd" class="hc3npei1j"/>`,
		"fallback": "solar:password-minimalistic-outline",
	});
}

export default Component;
