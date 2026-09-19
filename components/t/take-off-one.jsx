import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rs1g-shrt.css';
import '../../css/n/nm4514u-e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGodHBteUQ"><g class="aql7dnt-u"><path class="rs1g-shrt"/><path class="nm4514u-e"/></g></mask></defs><path mask="url(#SVGodHBteUQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:take-off-one",
	});
}

export default Component;
