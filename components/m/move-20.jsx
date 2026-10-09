import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz03g9rra.css';
import '../../css/k/kz2zzrs0w.css';
import '../../css/a/a_pbj0bst.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz03g9rra"/><path class="kz2zzrs0w"/><path class="a_pbj0bst"/>`,
		"fallback": "energy-icons:move-20",
	});
}

export default Component;
