import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/y/yzgcxqb4r.css';
import '../../css/v/v57r1kbjg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlUt0ucDS"><g class="ylrso7y3c"><path class="yzgcxqb4r"/><path class="v57r1kbjg"/></g></mask></defs><path mask="url(#SVGlUt0ucDS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:local-two",
	});
}

export default Component;
