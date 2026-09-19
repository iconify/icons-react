import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/c/chjv-8bni.css';
import '../../css/e/ep0jypbas.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyf6MKd5A"><g class="wwvp95byt"><path class="chjv-8bni"/><path class="ep0jypbas"/></g></mask></defs><path mask="url(#SVGyf6MKd5A)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:sd",
	});
}

export default Component;
