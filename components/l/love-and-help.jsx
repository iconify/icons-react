import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/f/fwtn4-ygl.css';
import '../../css/w/who9pkbgi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNNz1NbAg"><g class="wwvp95byt"><path class="fwtn4-ygl"/><path class="who9pkbgi"/></g></mask></defs><path mask="url(#SVGNNz1NbAg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:love-and-help",
	});
}

export default Component;
