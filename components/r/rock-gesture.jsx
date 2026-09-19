import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/tjw-xwbxp.css';
import '../../css/d/duhmw1bsi.css';
import '../../css/p/pmzo92h_v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoAVewbPb"><g class="v3_i3wktz"><path class="tjw-xwbxp"/><rect class="duhmw1bsi"/><rect class="pmzo92h_v"/></g></mask></defs><path mask="url(#SVGoAVewbPb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rock-gesture",
	});
}

export default Component;
