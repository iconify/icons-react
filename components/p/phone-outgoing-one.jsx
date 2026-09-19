import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/tk6mzc_3v.css';
import '../../css/u/uj6jun1kw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbHv56dcZ"><g class="v3_i3wktz"><path class="tk6mzc_3v"/><path class="uj6jun1kw"/></g></mask></defs><path mask="url(#SVGbHv56dcZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:phone-outgoing-one",
	});
}

export default Component;
