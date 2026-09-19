import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/c/caaopxbqh.css';
import '../../css/j/jwqcccb5s.css';
import '../../css/y/y64anccgt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGshkq9dKK"><g class="rohhhzb0l"><path class="caaopxbqh"/><circle class="jwqcccb5s"/><circle class="y64anccgt"/></g></mask></defs><path mask="url(#SVGshkq9dKK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shopping-cart-two",
	});
}

export default Component;
