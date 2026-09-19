import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/edtua7won.css';
import '../../css/v/v8_9z7bdz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPnz9RbDG"><g class="v3_i3wktz"><path class="edtua7won"/><path class="v8_9z7bdz"/></g></mask></defs><path mask="url(#SVGPnz9RbDG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:topic",
	});
}

export default Component;
