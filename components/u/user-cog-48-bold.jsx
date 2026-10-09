import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb3dfkb7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb3dfkb7w"/>`,
		"fallback": "energy-icons:user-cog-48-bold",
	});
}

export default Component;
