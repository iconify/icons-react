import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfd6n_b5f.css';
import '../../css/h/h7y14-blq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfd6n_b5f"/><path class="h7y14-blq"/>`,
		"fallback": "garden:translation-cycle-20",
	});
}

export default Component;
