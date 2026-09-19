import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zbsa-ujvj.css';
import '../../css/e/elnthojgr.css';
import '../../css/y/ysclwvbpv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjVZaGdHw"><g class="aql7dnt-u"><path class="zbsa-ujvj"/><path class="elnthojgr"/><path class="ysclwvbpv"/></g></mask></defs><path mask="url(#SVGjVZaGdHw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:kettle-one",
	});
}

export default Component;
