import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/g/gxtu-xick.css';
import '../../css/g/gc2rqrc4v.css';
import '../../css/v/vm1b4_bnl.css';
import '../../css/i/i9iwqjceg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtV2exeCU"><g class="rohhhzb0l"><path class="gxtu-xick"/><path class="gc2rqrc4v"/><path class="vm1b4_bnl"/><path class="i9iwqjceg"/></g></mask></defs><path mask="url(#SVGtV2exeCU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:reverse-lens",
	});
}

export default Component;
