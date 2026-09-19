import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/o2sblwhlm.css';
import '../../css/t/tg712obfr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyLGssdZJ"><g class="aql7dnt-u"><path clip-rule="evenodd" class="o2sblwhlm"/><path class="tg712obfr"/></g></mask></defs><path mask="url(#SVGyLGssdZJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tea-drink",
	});
}

export default Component;
