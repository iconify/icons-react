import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ug-3ocbdk.css';
import '../../css/q/qqb7s8hoo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzzRkYKZS"><g class="aql7dnt-u"><path class="ug-3ocbdk"/><path class="qqb7s8hoo"/></g></mask></defs><path mask="url(#SVGzzRkYKZS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:loading-three",
	});
}

export default Component;
