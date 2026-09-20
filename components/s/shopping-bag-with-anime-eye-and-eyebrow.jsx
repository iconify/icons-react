import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdi1gtbai.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdi1gtbai"/>`,
		"fallback": "pinhead:shopping-bag-with-anime-eye-and-eyebrow",
	});
}

export default Component;
