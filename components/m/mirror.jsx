import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qe2te7bxw.css';
import '../../css/b/beli9e-kr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuR0nwcKO"><g class="aql7dnt-u"><path class="qe2te7bxw"/><path class="beli9e-kr"/></g></mask></defs><path mask="url(#SVGuR0nwcKO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mirror",
	});
}

export default Component;
