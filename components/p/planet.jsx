import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/r37l61bly.css';
import '../../css/g/gtqwt3nvm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="r37l61bly"/><path class="gtqwt3nvm"/></g>`,
		"fallback": "icon-park:planet",
	});
}

export default Component;
