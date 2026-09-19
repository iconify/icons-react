import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1crshb5u.css';
import '../../css/s/sihn2yb6f.css';
import '../../css/h/hk3z8gb_h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1crshb5u"/><circle class="sihn2yb6f"/><circle class="hk3z8gb_h"/>`,
		"fallback": "catppuccin:root-open",
	});
}

export default Component;
