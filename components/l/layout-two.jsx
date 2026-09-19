import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/w/w-3mi7j8w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWFiNMeUh"><g class="v3_i3wktz"><rect class="h9qj9o6mz"/><path class="w-3mi7j8w"/></g></mask></defs><path mask="url(#SVGWFiNMeUh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:layout-two",
	});
}

export default Component;
