import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zay1jacum.css';
import '../../css/h/hqh2bo0cm.css';
import '../../css/r/rse4cpe7p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXO0C8tfp"><g class="aql7dnt-u"><path class="zay1jacum"/><path class="hqh2bo0cm"/><path class="rse4cpe7p"/></g></mask></defs><path mask="url(#SVGXO0C8tfp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:picture-one",
	});
}

export default Component;
