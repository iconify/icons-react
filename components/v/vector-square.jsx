import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rd2hxhb-u.css';
import '../../css/x/xtsrmvj7o.css';
import '../../css/b/bopi9b9jn.css';
import '../../css/f/fxwnb7vgp.css';
import '../../css/p/p9vjoqtlo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rd2hxhb-u"/><circle class="xtsrmvj7o"/><circle class="bopi9b9jn"/><circle class="fxwnb7vgp"/><circle class="p9vjoqtlo"/></g>`,
		"fallback": "lucide:vector-square",
	});
}

export default Component;
