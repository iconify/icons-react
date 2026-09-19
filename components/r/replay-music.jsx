import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bc32plywa.css';
import '../../css/j/j2oelba8n.css';
import '../../css/f/fw48gdx3v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGB8rdedOA"><g class="v3_i3wktz"><path class="bc32plywa"/><path class="j2oelba8n"/><path class="fw48gdx3v"/></g></mask></defs><path mask="url(#SVGB8rdedOA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:replay-music",
	});
}

export default Component;
