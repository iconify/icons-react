import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k697qj2pp.css';
import '../../css/a/aukopf2ea.css';
import '../../css/q/qztqjmb7f.css';
import '../../css/n/nblsbccok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k697qj2pp"/><path class="aukopf2ea"/><path class="qztqjmb7f"/><path class="nblsbccok"/>`,
		"fallback": "energy-icons:photodiode-48-bold",
	});
}

export default Component;
