import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpt8o4b1z.css';
import '../../css/f/ftf3a2zak.css';
import '../../css/d/dzism2bzg.css';
import '../../css/z/zs0elrbfp.css';
import '../../css/d/dusd2bb1j.css';
import '../../css/u/uhlgbac0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpt8o4b1z"/><path class="ftf3a2zak"/><path class="dzism2bzg"/><path class="zs0elrbfp"/><path class="dusd2bb1j"/><path class="uhlgbac0b"/>`,
		"fallback": "solar:layout-list-bold",
	});
}

export default Component;
