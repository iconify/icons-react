import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/ks7q4_j_c.css';
import '../../css/a/aaf-yjehr.css';
import '../../css/y/y46cwwbqw.css';
import '../../css/x/xzc1wubxb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGV2e1gdrK"><g class="aql7dnt-u"><path class="ks7q4_j_c"/><path class="aaf-yjehr"/><path class="y46cwwbqw"/><path class="xzc1wubxb"/></g></mask></defs><path mask="url(#SVGV2e1gdrK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:notebook-and-pen",
	});
}

export default Component;
