import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/pohjlbb7n.css';
import '../../css/g/g0mjuxxff.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTzCynSAx"><g class="aql7dnt-u"><path class="pohjlbb7n"/><path clip-rule="evenodd" class="g0mjuxxff"/></g></mask></defs><path mask="url(#SVGTzCynSAx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:radar-two",
	});
}

export default Component;
