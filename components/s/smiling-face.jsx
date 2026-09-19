import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/w/wepz3acte.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGx7qjRuYJ"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="wepz3acte"/></g></mask></defs><path mask="url(#SVGx7qjRuYJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:smiling-face",
	});
}

export default Component;
