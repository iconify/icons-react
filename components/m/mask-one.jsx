import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/zu8kvebxi.css';
import '../../css/t/tiqol0v4d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxkHcKemv"><g class="rohhhzb0l"><path class="zu8kvebxi"/><path class="tiqol0v4d"/></g></mask></defs><path mask="url(#SVGxkHcKemv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mask-one",
	});
}

export default Component;
