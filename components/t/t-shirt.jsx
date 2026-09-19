import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/ejhwpy_hp.css';
import '../../css/c/cqtvnzb7g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEMRG7dCS"><g class="aql7dnt-u"><path class="ejhwpy_hp"/><path class="cqtvnzb7g"/></g></mask></defs><path mask="url(#SVGEMRG7dCS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:t-shirt",
	});
}

export default Component;
