import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfe-tv.css';
import '../../css/s/s8e22g.css';
import '../../css/z/z5tiej.css';
import '../../css/d/d-vg0s0b.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfe-tv s8e22g"/><path class="s8e22g z5tiej"/>`,
		"fallback": "line-md:patreon",
	});
}

export default Component;
