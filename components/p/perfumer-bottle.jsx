import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/u_r9nla7w.css';
import '../../css/z/zyy02mypp.css';
import '../../css/d/dh_jh14ui.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6oQNTc1Z"><g class="aql7dnt-u"><rect class="u_r9nla7w"/><path class="zyy02mypp"/><path class="dh_jh14ui"/></g></mask></defs><path mask="url(#SVG6oQNTc1Z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:perfumer-bottle",
	});
}

export default Component;
