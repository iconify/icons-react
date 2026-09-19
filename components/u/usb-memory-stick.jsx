import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/k/kj3q5nc5m.css';
import '../../css/q/q-zjd75mw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxfXy1d4H"><g class="wwvp95byt"><path class="kj3q5nc5m"/><path class="q-zjd75mw"/></g></mask></defs><path mask="url(#SVGxfXy1d4H)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:usb-memory-stick",
	});
}

export default Component;
