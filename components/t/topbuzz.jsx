import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a67hi8bws.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGg3e8VdEc"><path class="a67hi8bws"/></mask></defs><path mask="url(#SVGg3e8VdEc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:topbuzz",
	});
}

export default Component;
