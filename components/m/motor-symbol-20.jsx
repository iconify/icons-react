import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9xdadbxa.css';
import '../../css/z/zzudz-b7q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9xdadbxa"/><path class="zzudz-b7q"/>`,
		"fallback": "energy-icons:motor-symbol-20",
	});
}

export default Component;
