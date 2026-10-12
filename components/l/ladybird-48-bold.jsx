import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta5f1hbwd.css';
import '../../css/u/une-91bkz.css';
import '../../css/g/gk5hfuifs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta5f1hbwd"/><path class="une-91bkz"/><path class="gk5hfuifs"/>`,
		"fallback": "energy-icons:ladybird-48-bold",
	});
}

export default Component;
