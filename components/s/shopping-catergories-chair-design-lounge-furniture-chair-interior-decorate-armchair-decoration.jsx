import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoa_vzbef.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoa_vzbef"/>`,
		"fallback": "streamline:shopping-catergories-chair-design-lounge-furniture-chair-interior-decorate-armchair-decoration",
	});
}

export default Component;
