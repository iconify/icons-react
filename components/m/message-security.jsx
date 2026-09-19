import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/z7dq4587f.css';
import '../../css/b/bwow5seie.css';
import '../../css/v/vn_agwb7j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiLzEkdTl"><g class="aql7dnt-u"><path class="z7dq4587f"/><path class="bwow5seie"/><path class="vn_agwb7j"/></g></mask></defs><path mask="url(#SVGiLzEkdTl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:message-security",
	});
}

export default Component;
