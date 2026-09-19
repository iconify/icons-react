import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/b/bm5v79neo.css';
import '../../css/q/qy7fhdaaz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQAw03bSJ"><g class="ylrso7y3c"><path class="bm5v79neo"/><path class="qy7fhdaaz"/></g></mask></defs><path mask="url(#SVGQAw03bSJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:switch-button",
	});
}

export default Component;
