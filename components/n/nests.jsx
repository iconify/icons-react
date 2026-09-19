import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dkifpkb7f.css';
import '../../css/e/ed0jdhbeg.css';
import '../../css/z/z6n0qjvfb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtnDBWJ9A"><g class="v3_i3wktz"><path class="dkifpkb7f"/><path clip-rule="evenodd" class="ed0jdhbeg"/><path clip-rule="evenodd" class="z6n0qjvfb"/></g></mask></defs><path mask="url(#SVGtnDBWJ9A)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:nests",
	});
}

export default Component;
