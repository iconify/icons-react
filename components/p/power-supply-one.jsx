import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/ki8-vs-ts.css';
import '../../css/y/y7ehahefr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvA928dIc"><g class="aql7dnt-u"><path class="ki8-vs-ts"/><path class="y7ehahefr"/></g></mask></defs><path mask="url(#SVGvA928dIc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:power-supply-one",
	});
}

export default Component;
