import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/l44v9bgvv.css';
import '../../css/c/cptqxnrfy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0QuWAeAQ"><g class="aql7dnt-u"><path class="l44v9bgvv"/><path class="cptqxnrfy"/></g></mask></defs><path mask="url(#SVG0QuWAeAQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:press",
	});
}

export default Component;
