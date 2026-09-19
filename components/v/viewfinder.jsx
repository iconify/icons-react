import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/l/lpaon527v.css';
import '../../css/r/rcg21acjr.css';
import '../../css/c/c-t2agb9e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlJ829dGL"><g class="rohhhzb0l"><path class="lpaon527v"/><path class="rcg21acjr"/><path class="c-t2agb9e"/></g></mask></defs><path mask="url(#SVGlJ829dGL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:viewfinder",
	});
}

export default Component;
