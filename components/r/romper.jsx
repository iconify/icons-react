import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/a_-bsmb1m.css';
import '../../css/r/rg113dddb.css';
import '../../css/k/kj-k9st5r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGs0naKbWD"><g class="aql7dnt-u"><path class="a_-bsmb1m"/><path class="rg113dddb"/><path class="kj-k9st5r"/></g></mask></defs><path mask="url(#SVGs0naKbWD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:romper",
	});
}

export default Component;
