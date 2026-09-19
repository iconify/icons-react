import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/n/ncp28ccos.css';
import '../../css/b/biimt8bww.css';
import '../../css/f/ftfrwq2bw.css';
import '../../css/h/hvz7xwnpr.css';
import '../../css/f/fwrvuqbgt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="ncp28ccos"/><path class="biimt8bww"/><path class="ftfrwq2bw"/><path class="hvz7xwnpr"/><path class="fwrvuqbgt"/></g>`,
		"fallback": "icon-park:sandwich",
	});
}

export default Component;
