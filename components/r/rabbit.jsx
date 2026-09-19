import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nu-xanbpn.css';
import '../../css/p/pbsi8cc2n.css';
import '../../css/l/l7mgxrb6w.css';
import '../../css/l/lx0r7ilym.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nu-xanbpn"/><path class="pbsi8cc2n"/><path class="l7mgxrb6w"/><path class="lx0r7ilym"/></g>`,
		"fallback": "fluent-emoji-flat:rabbit",
	});
}

export default Component;
