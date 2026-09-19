import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drkhbl8_m.css';
import '../../css/z/zyav6vbpo.css';
import '../../css/l/lfy2osnfb.css';
import '../../css/f/fgt9l6boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drkhbl8_m"/><path class="zyav6vbpo"/><path class="lfy2osnfb"/><path clip-rule="evenodd" class="fgt9l6boy"/>`,
		"fallback": "basil:viber-outline",
	});
}

export default Component;
