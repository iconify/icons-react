import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/z7dq4587f.css';
import '../../css/c/cfp1robhh.css';
import '../../css/x/x5d_g09_z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxdOAMbRG"><g class="aql7dnt-u"><path class="z7dq4587f"/><path class="cfp1robhh"/><path class="x5d_g09_z"/></g></mask></defs><path mask="url(#SVGxdOAMbRG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:message-privacy",
	});
}

export default Component;
