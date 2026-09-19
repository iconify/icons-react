import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/n/n95gqt_fs.css';
import '../../css/v/vt616c4jv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGebzLibPd"><g class="adexpl72i"><path class="n95gqt_fs"/><path class="vt616c4jv"/></g></mask></defs><path mask="url(#SVGebzLibPd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:three-hexagons",
	});
}

export default Component;
