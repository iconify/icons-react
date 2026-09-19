import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/rsqaxjbon.css';
import '../../css/x/x2opukbfv.css';
import '../../css/v/vds6lqbpe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEryUvHPo"><g class="v3_i3wktz"><path class="rsqaxjbon"/><path class="x2opukbfv"/><path class="vds6lqbpe"/></g></mask></defs><path mask="url(#SVGEryUvHPo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:stack-light",
	});
}

export default Component;
