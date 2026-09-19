import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/c/cf52fycgx.css';
import '../../css/u/u5_5228jl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCnMsPcDo"><g class="adexpl72i"><path class="cf52fycgx"/><path class="u5_5228jl"/></g></mask></defs><path mask="url(#SVGCnMsPcDo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:lipstick-one",
	});
}

export default Component;
