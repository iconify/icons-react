import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6g-cwbpb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQlSZBd9z"><path class="r6g-cwbpb"/></mask></defs><path mask="url(#SVGQlSZBd9z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:trapezoid",
	});
}

export default Component;
