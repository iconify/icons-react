import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_de_rbqi.css';
import '../../css/s/szwh8_usw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_de_rbqi"/><path class="szwh8_usw"/>`,
		"fallback": "energy-icons:thumbs-down-48",
	});
}

export default Component;
