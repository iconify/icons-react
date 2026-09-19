import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/qdychfmlx.css';
import '../../css/f/fsqn6obci.css';
import '../../css/d/dak5wlciw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDsP4Cect"><g class="v3_i3wktz"><path class="qdychfmlx"/><path clip-rule="evenodd" class="fsqn6obci"/><path class="dak5wlciw"/></g></mask></defs><path mask="url(#SVGDsP4Cect)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rocket",
	});
}

export default Component;
