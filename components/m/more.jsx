import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utsj4bcuc.css';
import '../../css/m/mprl4mbnb.css';
import '../../css/e/e8068gado.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="utsj4bcuc"/><circle class="mprl4mbnb"/><circle class="e8068gado"/>`,
		"fallback": "icon-park-outline:more",
	});
}

export default Component;
