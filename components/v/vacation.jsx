import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/pjj5hcb0g.css';
import '../../css/w/wrqafjrbc.css';
import '../../css/g/gs4zh9bym.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxh5Aod9y"><g class="aql7dnt-u"><path class="pjj5hcb0g"/><path class="wrqafjrbc"/><path class="gs4zh9bym"/></g></mask></defs><path mask="url(#SVGxh5Aod9y)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:vacation",
	});
}

export default Component;
