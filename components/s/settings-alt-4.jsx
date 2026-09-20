import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dysq3ibxq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dysq3ibxq"/>`,
		"fallback": "marketeq:settings-alt-4",
	});
}

export default Component;
