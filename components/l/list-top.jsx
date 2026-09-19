import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dc6_e3_dl.css';
import '../../css/z/zlmt_sszd.css';
import '../../css/y/y0qmgo4nn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGceNnccAT"><g class="v3_i3wktz"><path class="dc6_e3_dl"/><path class="zlmt_sszd"/><path class="y0qmgo4nn"/></g></mask></defs><path mask="url(#SVGceNnccAT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:list-top",
	});
}

export default Component;
