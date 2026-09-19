import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/k9nfxk8un.css';
import '../../css/k/kq3muab2y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIujexeIo"><g class="aql7dnt-u"><path class="k9nfxk8un"/><path class="kq3muab2y"/></g></mask></defs><path mask="url(#SVGIujexeIo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:run-left",
	});
}

export default Component;
