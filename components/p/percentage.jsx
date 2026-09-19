import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/gthhlgbfb.css';
import '../../css/d/drfmktxeg.css';
import '../../css/o/opakkwbyw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1T7L4d3d"><g class="aql7dnt-u"><circle class="gthhlgbfb"/><circle class="drfmktxeg"/><path class="opakkwbyw"/></g></mask></defs><path mask="url(#SVG1T7L4d3d)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:percentage",
	});
}

export default Component;
