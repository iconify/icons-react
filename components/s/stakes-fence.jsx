import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb078absx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb078absx"/>`,
		"fallback": "game-icons:stakes-fence",
	});
}

export default Component;
