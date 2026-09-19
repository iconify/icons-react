import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e_iwscbqa.css';
import '../../css/z/z6d_ftb-e.css';
import '../../css/x/xs8gor1qb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYQdxLdeN"><g class="aql7dnt-u"><circle class="e_iwscbqa"/><path class="z6d_ftb-e"/><path class="xs8gor1qb"/></g></mask></defs><path mask="url(#SVGYQdxLdeN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:user-business",
	});
}

export default Component;
