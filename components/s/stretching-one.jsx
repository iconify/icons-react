import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/v_mrg_w2s.css';
import '../../css/u/ui9-jtblu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYpTeprJD"><g class="rohhhzb0l"><circle class="v_mrg_w2s"/><path class="ui9-jtblu"/></g></mask></defs><path mask="url(#SVGYpTeprJD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:stretching-one",
	});
}

export default Component;
