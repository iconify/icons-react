import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/ji6bwbm_c.css';
import '../../css/g/gsaz2lbqg.css';
import '../../css/w/w0tt369dj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGg3Sutb0i"><g class="v3_i3wktz"><path class="ji6bwbm_c"/><path class="gsaz2lbqg"/><path class="w0tt369dj"/></g></mask></defs><path mask="url(#SVGg3Sutb0i)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rotate",
	});
}

export default Component;
