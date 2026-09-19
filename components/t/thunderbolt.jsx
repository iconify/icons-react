import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/z_-pg52ih.css';
import '../../css/h/huqu7zbyk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeTp9Id0Z"><g class="aql7dnt-u"><path class="z_-pg52ih"/><path class="huqu7zbyk"/></g></mask></defs><path mask="url(#SVGeTp9Id0Z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:thunderbolt",
	});
}

export default Component;
