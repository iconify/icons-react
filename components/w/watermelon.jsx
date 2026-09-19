import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/k/ktokpccng.css';
import '../../css/r/rtdu8kbun.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6EkOAb1c"><g class="ufeehvblu"><path class="ktokpccng"/><path class="rtdu8kbun"/></g></mask></defs><path mask="url(#SVG6EkOAb1c)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:watermelon",
	});
}

export default Component;
