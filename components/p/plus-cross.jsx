import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6_q3wbbu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG55kMGW2R"><path class="v6_q3wbbu"/></mask></defs><path mask="url(#SVG55kMGW2R)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:plus-cross",
	});
}

export default Component;
