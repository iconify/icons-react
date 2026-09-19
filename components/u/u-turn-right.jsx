import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/ytyivubup.css';
import '../../css/g/gieyr613j.css';
import '../../css/e/etuwxebqb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvbemke7S"><g class="rohhhzb0l"><path class="ytyivubup"/><path class="gieyr613j"/><circle class="etuwxebqb"/></g></mask></defs><path mask="url(#SVGvbemke7S)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:u-turn-right",
	});
}

export default Component;
