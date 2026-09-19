import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/v0ofwpdfu.css';
import '../../css/q/q06y_ceai.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGplfPTcLm"><g class="rohhhzb0l"><path clip-rule="evenodd" class="v0ofwpdfu"/><path class="q06y_ceai"/></g></mask></defs><path mask="url(#SVGplfPTcLm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sd-card",
	});
}

export default Component;
