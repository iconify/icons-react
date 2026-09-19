import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/n7f99bojn.css';
import '../../css/p/ptxldtbxo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfIgoeeRz"><g class="v3_i3wktz"><path class="n7f99bojn"/><path class="ptxldtbxo"/></g></mask></defs><path mask="url(#SVGfIgoeeRz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:vip",
	});
}

export default Component;
