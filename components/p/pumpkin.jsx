import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/nc-cps94t.css';
import '../../css/h/hsmgu8r4l.css';
import '../../css/c/cyfkkj1ox.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXuDXNdsR"><g class="rohhhzb0l"><rect class="nc-cps94t"/><ellipse class="hsmgu8r4l"/><path class="cyfkkj1ox"/></g></mask></defs><path mask="url(#SVGXuDXNdsR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pumpkin",
	});
}

export default Component;
