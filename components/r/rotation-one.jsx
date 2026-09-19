import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/ka1_8zbxt.css';
import '../../css/o/ooj06lbbu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVPrCLdYG"><g class="aql7dnt-u"><path class="ka1_8zbxt"/><path class="ooj06lbbu"/></g></mask></defs><path mask="url(#SVGVPrCLdYG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rotation-one",
	});
}

export default Component;
