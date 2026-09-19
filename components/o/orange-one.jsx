import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rxf7n0b4j.css';
import '../../css/a/a5u-aqbta.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpxrZpcpf"><g class="aql7dnt-u"><path class="rxf7n0b4j"/><path class="a5u-aqbta"/></g></mask></defs><path mask="url(#SVGpxrZpcpf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:orange-one",
	});
}

export default Component;
