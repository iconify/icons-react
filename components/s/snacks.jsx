import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/x5qfqd5ld.css';
import '../../css/w/wujqs2ipr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6MK2Wb3V"><g class="v3_i3wktz"><path class="x5qfqd5ld"/><path class="wujqs2ipr"/></g></mask></defs><path mask="url(#SVG6MK2Wb3V)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:snacks",
	});
}

export default Component;
