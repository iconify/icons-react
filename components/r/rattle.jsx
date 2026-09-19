import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uw9rzrb8v.css';
import '../../css/c/ccyl2j98s.css';
import '../../css/l/lvkcdpcik.css';
import '../../css/l/lpok977mo.css';
import '../../css/q/qm_hwpb0e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVRMbB5NW"><g class="aql7dnt-u"><circle transform="rotate(40 30.075 15.562)" class="uw9rzrb8v"/><path class="ccyl2j98s"/><circle transform="rotate(40 11.24 19.34)" class="lvkcdpcik"/><circle transform="rotate(40 28.462 37.707)" class="lpok977mo"/><path class="qm_hwpb0e"/></g></mask></defs><path mask="url(#SVGVRMbB5NW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rattle",
	});
}

export default Component;
