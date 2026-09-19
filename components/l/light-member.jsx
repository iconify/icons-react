import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/l/l4o2qpb4m.css';
import '../../css/x/xt5biq_ks.css';
import '../../css/q/qkenzxbrz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwVV02FKq"><g class="rohhhzb0l"><path class="l4o2qpb4m"/><path class="xt5biq_ks"/><path class="qkenzxbrz"/></g></mask></defs><path mask="url(#SVGwVV02FKq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:light-member",
	});
}

export default Component;
