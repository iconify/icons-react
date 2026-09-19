import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/wx67ces3c.css';
import '../../css/u/u0od4-lfi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeVkoSbwU"><g class="aql7dnt-u"><path class="wx67ces3c"/><path class="u0od4-lfi"/></g></mask></defs><path mask="url(#SVGeVkoSbwU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:party-balloon",
	});
}

export default Component;
