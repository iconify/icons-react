import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3i_r2byq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3i_r2byq"/>`,
		"fallback": "pinhead:memorial-stone-with-ankh",
	});
}

export default Component;
