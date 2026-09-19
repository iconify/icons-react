import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/vknmo2d0c.css';
import '../../css/d/dx1bpub0v.css';
import '../../css/i/iply1wbuc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhy06acoe"><g class="aql7dnt-u"><path class="vknmo2d0c"/><path class="dx1bpub0v"/><path class="iply1wbuc"/></g></mask></defs><path mask="url(#SVGhy06acoe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:receiver",
	});
}

export default Component;
