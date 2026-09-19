import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/ehq94ab3m.css';
import '../../css/e/ewapn8bvm.css';
import '../../css/u/uanaekbsb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKmZ2HFof"><g class="v3_i3wktz"><path class="ehq94ab3m"/><path class="ewapn8bvm"/><path class="uanaekbsb"/></g></mask></defs><path mask="url(#SVGKmZ2HFof)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:toolkit",
	});
}

export default Component;
