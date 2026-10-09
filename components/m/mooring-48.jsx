import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceo5d9jzo.css';
import '../../css/a/a3rw99r6d.css';
import '../../css/o/oh-p8p-0y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceo5d9jzo"/><path class="a3rw99r6d"/><path class="oh-p8p-0y"/>`,
		"fallback": "energy-icons:mooring-48",
	});
}

export default Component;
