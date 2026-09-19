import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/oib7atbgf.css';
import '../../css/a/aoxssybqm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyH3hlcdP"><g class="aql7dnt-u"><path class="oib7atbgf"/><path class="aoxssybqm"/></g></mask></defs><path mask="url(#SVGyH3hlcdP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:phone-booth",
	});
}

export default Component;
