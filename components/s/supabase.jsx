import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzu0hx63v.css';
import '../../css/o/oo9xgfbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGgmnKNc0g" class="bzu0hx63v"/></defs><use href="#SVGgmnKNc0g"/><use href="#SVGgmnKNc0g"/><path class="oo9xgfbil"/>`,
		"fallback": "lineicons:supabase",
	});
}

export default Component;
