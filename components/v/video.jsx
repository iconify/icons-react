import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/tp_-sbc1k.css';
import '../../css/e/eeqboeb7g.css';
import '../../css/x/x46glnb9j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYX7p8bBS"><g class="v3_i3wktz"><path class="tp_-sbc1k"/><path class="eeqboeb7g"/><path class="x46glnb9j"/></g></mask></defs><path mask="url(#SVGYX7p8bBS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:video",
	});
}

export default Component;
