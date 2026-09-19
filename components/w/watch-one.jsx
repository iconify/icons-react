import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/yeo4tvbtv.css';
import '../../css/a/ag8htpbhv.css';
import '../../css/j/jnko8r0hc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMa86wdcE"><g class="s9cl3zbei"><path class="yeo4tvbtv"/><circle class="ag8htpbhv"/><path class="jnko8r0hc"/></g></mask></defs><path mask="url(#SVGMa86wdcE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:watch-one",
	});
}

export default Component;
