import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qjpmzcbfz.css';
import '../../css/m/mr-c0lbac.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGknHUcdGG"><g class="aql7dnt-u"><path class="qjpmzcbfz"/><path class="mr-c0lbac"/></g></mask></defs><path mask="url(#SVGknHUcdGG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:vip-one",
	});
}

export default Component;
