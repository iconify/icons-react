import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9ei6dbpa.css';
import '../../css/u/u7k-t2blh.css';
import '../../css/f/f-g4jnfew.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBQsS7c4f"><g class="aql7dnt-u"><path class="h9ei6dbpa"/><rect transform="rotate(-45 5.071 33.071)" class="u7k-t2blh"/><path class="f-g4jnfew"/></g></mask></defs><path mask="url(#SVGBQsS7c4f)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sandwich-one",
	});
}

export default Component;
