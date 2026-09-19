import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntgros_9i.css';
import '../../css/x/xvmpc_kfa.css';
import '../../css/i/iyd3g3q8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ntgros_9i"/><path clip-rule="evenodd" class="xvmpc_kfa"/><path clip-rule="evenodd" class="iyd3g3q8g"/>`,
		"fallback": "cuida:totem-outline",
	});
}

export default Component;
