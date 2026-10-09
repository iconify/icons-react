import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm-6ijbqa.css';
import '../../css/k/k3_wrxi7z.css';
import '../../css/d/d90gdxket.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm-6ijbqa"/><path class="k3_wrxi7z"/><path class="d90gdxket"/>`,
		"fallback": "energy-icons:jack-up-vessel-48",
	});
}

export default Component;
