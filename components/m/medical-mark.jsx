import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wonky8b2c.css';
import '../../css/f/fskaxzzpg.css';
import '../../css/k/kinc7xbvh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwoSM3bAQ"><g class="ufeehvblu"><path class="wonky8b2c"/><path class="fskaxzzpg"/><path class="kinc7xbvh"/></g></mask></defs><path mask="url(#SVGwoSM3bAQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:medical-mark",
	});
}

export default Component;
