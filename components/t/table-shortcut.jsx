import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz5dirmwx.css';
import '../../css/s/s-cmdjj4b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz5dirmwx"/><path class="s-cmdjj4b"/>`,
		"fallback": "carbon:table-shortcut",
	});
}

export default Component;
