import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/pbcpcobla.css';
import '../../css/k/kj7rbbbvu.css';
import '../../css/w/wv-togb4q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGn3njyxva"><g class="v3_i3wktz"><path class="pbcpcobla"/><path class="kj7rbbbvu"/><path class="wv-togb4q"/></g></mask></defs><path mask="url(#SVGn3njyxva)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:performance",
	});
}

export default Component;
