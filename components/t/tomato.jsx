import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/fsx1iv68d.css';
import '../../css/a/as4b8ybnt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGk42sHeYg"><g class="aql7dnt-u"><path class="fsx1iv68d"/><path class="as4b8ybnt"/></g></mask></defs><path mask="url(#SVGk42sHeYg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tomato",
	});
}

export default Component;
