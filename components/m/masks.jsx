import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rahfs-2vi.css';
import '../../css/l/l9ho-jblf.css';
import '../../css/r/rwwo4yncv.css';
import '../../css/o/oojpntb5k.css';
import '../../css/o/octwf6rrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rahfs-2vi"/><path class="l9ho-jblf"/><path class="rwwo4yncv"/><path class="oojpntb5k"/><path class="octwf6rrp"/></g>`,
		"fallback": "streamline-cyber-color:masks",
	});
}

export default Component;
