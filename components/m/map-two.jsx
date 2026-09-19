import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/a89p05mcb.css';
import '../../css/d/dsz9dwbht.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMzaSmcnT"><g class="v3_i3wktz"><path class="a89p05mcb"/><path class="dsz9dwbht"/></g></mask></defs><path mask="url(#SVGMzaSmcnT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:map-two",
	});
}

export default Component;
