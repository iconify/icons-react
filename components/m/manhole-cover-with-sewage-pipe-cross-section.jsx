import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcifvji8v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcifvji8v"/>`,
		"fallback": "pinhead:manhole-cover-with-sewage-pipe-cross-section",
	});
}

export default Component;
