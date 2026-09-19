import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/frs-1pvcu.css';
import '../../css/r/r77yemz5v.css';
import '../../css/e/edhf98bll.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYAahXcmP"><g class="v3_i3wktz"><path class="frs-1pvcu"/><path class="r77yemz5v"/><path class="edhf98bll"/></g></mask></defs><path mask="url(#SVGYAahXcmP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:parking",
	});
}

export default Component;
