import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md3_ln_5j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWg8t6c8U"><path class="md3_ln_5j"/></mask></defs><path mask="url(#SVGWg8t6c8U)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:twitter",
	});
}

export default Component;
