import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_8qphb1a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCOhucbsT"><path class="n_8qphb1a"/></mask></defs><path mask="url(#SVGCOhucbsT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:quadrilateral",
	});
}

export default Component;
