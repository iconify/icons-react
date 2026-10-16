import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afm76vb_a.css';
import '../../css/w/wl684zpen.css';
import '../../css/n/n_-i-of3v.css';
import '../../css/w/wuzazob5f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afm76vb_a"/><path class="wl684zpen"/><path class="n_-i-of3v"/><path class="wuzazob5f"/>`,
		"fallback": "energy-icons:mosque-48-bold",
	});
}

export default Component;
