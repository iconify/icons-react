import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/p/pvs4vzbqe.css';
import '../../css/j/jgxrsjbxi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRquGTc0J"><g class="adexpl72i"><path class="pvs4vzbqe"/><rect class="jgxrsjbxi"/></g></mask></defs><path mask="url(#SVGRquGTc0J)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:palm",
	});
}

export default Component;
