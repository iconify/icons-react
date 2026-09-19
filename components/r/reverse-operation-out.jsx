import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/k9nfxk8un.css';
import '../../css/x/xvxhahiqh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGb6V9abQJ"><g class="aql7dnt-u"><path class="k9nfxk8un"/><path class="xvxhahiqh"/></g></mask></defs><path mask="url(#SVGb6V9abQJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:reverse-operation-out",
	});
}

export default Component;
