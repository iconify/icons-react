import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2zpr60_w.css';
import '../../css/t/tx4fhibgn.css';
import '../../css/f/fj4vt1kml.css';
import '../../css/v/v2zc7vb1h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2zpr60_w"/><path class="tx4fhibgn"/><path class="fj4vt1kml"/><path class="v2zc7vb1h"/>`,
		"fallback": "energy-icons:shovel-48",
	});
}

export default Component;
