import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/a8yau0s8m.css';
import '../../css/x/x9k21mbpj.css';
import '../../css/o/oz4cddb6j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXKJ31gMh"><g class="aql7dnt-u"><path class="a8yau0s8m"/><path class="x9k21mbpj"/><rect class="oz4cddb6j"/></g></mask></defs><path mask="url(#SVGXKJ31gMh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:intersection",
	});
}

export default Component;
