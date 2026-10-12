import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8mn3cssj.css';
import '../../css/b/bcaaafv4h.css';
import '../../css/z/z8-thgb1h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8mn3cssj"/><path class="bcaaafv4h"/><path class="z8-thgb1h"/>`,
		"fallback": "energy-icons:ladybird-20-bold",
	});
}

export default Component;
