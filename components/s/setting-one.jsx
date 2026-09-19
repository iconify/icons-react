import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/s/s9uhsrbom.css';
import '../../css/v/v3q5wob3k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgJINOb7I"><g class="ylrso7y3c"><path class="s9uhsrbom"/><path class="v3q5wob3k"/></g></mask></defs><path mask="url(#SVGgJINOb7I)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:setting-one",
	});
}

export default Component;
