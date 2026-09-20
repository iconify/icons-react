import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlp3f3bjz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlp3f3bjz"/>`,
		"fallback": "pinhead:rope-fence",
	});
}

export default Component;
