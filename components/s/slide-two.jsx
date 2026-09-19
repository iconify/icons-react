import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/r9ztc99mw.css';
import '../../css/s/sqb547b2g.css';
import '../../css/m/m6j54zbzf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFJKSGetg"><g class="aql7dnt-u"><path class="r9ztc99mw"/><path clip-rule="evenodd" class="sqb547b2g"/><path class="m6j54zbzf"/></g></mask></defs><path mask="url(#SVGFJKSGetg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:slide-two",
	});
}

export default Component;
