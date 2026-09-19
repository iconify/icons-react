import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/gxyloibgv.css';
import '../../css/d/d-hdlvbnx.css';
import '../../css/z/zdoglobqf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDDApAd5l"><g class="aql7dnt-u"><path class="gxyloibgv"/><path class="d-hdlvbnx"/><path class="zdoglobqf"/></g></mask></defs><path mask="url(#SVGDDApAd5l)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:onesies",
	});
}

export default Component;
