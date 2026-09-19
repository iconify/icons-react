import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/tpe_wqd8w.css';
import '../../css/w/wpv3vjbqz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGovpcf0OF"><g class="v3_i3wktz"><path class="tpe_wqd8w"/><path class="wpv3vjbqz"/></g></mask></defs><path mask="url(#SVGovpcf0OF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:needle",
	});
}

export default Component;
