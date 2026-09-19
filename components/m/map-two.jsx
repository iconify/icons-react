import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lida862-d.css';
import '../../css/m/mktkafb5g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7rL5W2Zc"><g class="ufeehvblu"><path class="lida862-d"/><path class="mktkafb5g"/></g></mask></defs><path mask="url(#SVG7rL5W2Zc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:map-two",
	});
}

export default Component;
