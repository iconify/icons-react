import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwm94h7db.css';
import '../../css/p/pmxdqdbac.css';
import '../../css/p/p78phac9m.css';
import '../../css/q/q9c6evmhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwm94h7db"/><path class="pmxdqdbac"/><path class="p78phac9m"/><path class="q9c6evmhl"/>`,
		"fallback": "solar:trash-bin-minimalistic-bold-duotone",
	});
}

export default Component;
