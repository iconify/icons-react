import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/n/nve97zbbq.css';
import '../../css/b/bzw5ayfte.css';
import '../../css/g/gheu1bblx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8BgdeebD"><g class="gopnm44um"><path class="nve97zbbq"/><path class="bzw5ayfte"/><path class="gheu1bblx"/></g></mask></defs><path mask="url(#SVG8BgdeebD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:shovel-one",
	});
}

export default Component;
