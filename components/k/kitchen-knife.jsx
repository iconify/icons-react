import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pr1i_9hyb.css';
import '../../css/w/wk863kbaw.css';
import '../../css/g/gavy2zwed.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlwsAoeXo"><g class="ft5dv1b6b"><path class="pr1i_9hyb"/><path class="wk863kbaw"/><circle class="gavy2zwed"/></g></mask></defs><path mask="url(#SVGlwsAoeXo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:kitchen-knife",
	});
}

export default Component;
