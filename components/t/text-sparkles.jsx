import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilzdcj2ag.css';
import '../../css/l/leexmhk5k.css';
import '../../css/h/h97g9dbxs.css';
import '../../css/z/zaiqusb9j.css';
import '../../css/z/zblt3mbso.css';
import '../../css/z/z4ownwbko.css';
import '../../css/d/dcb985blj.css';
import '../../css/n/nntdrdbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilzdcj2ag wm-shadow"/><path class="leexmhk5k wm-k"/><path class="h97g9dbxs wm-k"/><path class="wm-s zaiqusb9j"/><path class="wm-s zblt3mbso"/><path class="wm-s z4ownwbko"/><path class="dcb985blj wm-s"/><path class="nntdrdbuw wm-s"/>`,
		"fallback": "withicons-pastel:text-sparkles",
	});
}

export default Component;
