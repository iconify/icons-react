import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6fk-hbzz.css';
import '../../css/h/h92n3z2qg.css';
import '../../css/i/im5n_6bkh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6fk-hbzz"/><path class="h92n3z2qg"/><path class="im5n_6bkh"/>`,
		"fallback": "energy-icons:oil-tanker-48-bold",
	});
}

export default Component;
