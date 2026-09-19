import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/o79otobmw.css';
import '../../css/v/vqep0fwtc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwzSr7b4o"><g class="aql7dnt-u"><path class="o79otobmw"/><path class="vqep0fwtc"/></g></mask></defs><path mask="url(#SVGwzSr7b4o)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:the-single-shoulder-bag",
	});
}

export default Component;
