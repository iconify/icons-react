import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/z8go-2bus.css';
import '../../css/p/p9swojy5o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="svgIDa"><g class="v3_i3wktz"><path class="z8go-2bus"/><path class="p9swojy5o"/></g></mask><path mask="url(#svgIDa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:list-two",
	});
}

export default Component;
