import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btr0sh55s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btr0sh55s"/>`,
		"fallback": "radix-icons:speaker-quiet",
	});
}

export default Component;
