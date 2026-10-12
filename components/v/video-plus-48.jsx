import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybux8wb4n.css';
import '../../css/u/uyqbhibit.css';
import '../../css/b/bbxn-dufo.css';
import '../../css/k/kem81wb3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybux8wb4n"/><path class="uyqbhibit"/><path class="bbxn-dufo"/><path class="kem81wb3i"/>`,
		"fallback": "energy-icons:video-plus-48",
	});
}

export default Component;
