import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/fe9lu6e9u.css';
import '../../css/k/katd21ghy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcSnQAbTc"><g class="aql7dnt-u"><path class="fe9lu6e9u"/><path class="katd21ghy"/></g></mask></defs><path mask="url(#SVGcSnQAbTc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:minus-the-bottom",
	});
}

export default Component;
