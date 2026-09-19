import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9crkbcmi.css';
import '../../css/v/vywszeb-t.css';
import '../../css/d/d_5hd163w.css';
import '../../css/m/m-cozdbmp.css';
import '../../css/u/uxqvqub-g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9crkbcmi"/><path class="vywszeb-t"/><path class="d_5hd163w"/><path class="m-cozdbmp"/><ellipse class="uxqvqub-g"/>`,
		"fallback": "flat-color-icons:panorama",
	});
}

export default Component;
