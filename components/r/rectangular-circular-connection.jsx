import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fobtc1bdc.css';
import '../../css/n/n_jh6lbfx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZh3QTFPY"><g class="v3_i3wktz"><path class="fobtc1bdc"/><path class="n_jh6lbfx"/></g></mask></defs><path mask="url(#SVGZh3QTFPY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rectangular-circular-connection",
	});
}

export default Component;
