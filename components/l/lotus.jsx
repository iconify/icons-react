import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/d/dxeb_oimn.css';
import '../../css/l/lvj__6b2u.css';
import '../../css/x/xd8boob5w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGxK65dxM"><g class="aql7dnt-u"><path class="dxeb_oimn"/><path class="lvj__6b2u"/><path class="xd8boob5w"/></g></mask></defs><path mask="url(#SVGGxK65dxM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:lotus",
	});
}

export default Component;
