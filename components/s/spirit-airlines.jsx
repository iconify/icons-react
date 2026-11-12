import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trl7bqbmp.css';
import '../../css/d/d9m02bchl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trl7bqbmp"/><path class="d9m02bchl"/>`,
		"fallback": "selfhst:spirit-airlines",
	});
}

export default Component;
