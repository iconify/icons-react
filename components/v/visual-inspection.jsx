import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjbc43igg.css';
import '../../css/a/a_barob7i.css';
import '../../css/k/kffkq4b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjbc43igg"/><path class="a_barob7i"/><path class="kffkq4b9z"/>`,
		"fallback": "gcp:visual-inspection",
	});
}

export default Component;
