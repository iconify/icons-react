import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/htvgmj-8k.css';
import '../../css/j/jt31pohym.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6G4YHeLE"><g class="aql7dnt-u"><circle class="htvgmj-8k"/><path class="jt31pohym"/></g></mask></defs><path mask="url(#SVG6G4YHeLE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:setting-three",
	});
}

export default Component;
