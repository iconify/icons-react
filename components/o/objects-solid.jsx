import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8n9-8bmz.css';
import '../../css/u/ubnymlb9p.css';
import '../../css/t/thrw0jg-j.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 m8n9-8bmz"/><path class="clr-i-solid clr-i-solid-path-2 ubnymlb9p"/><circle class="clr-i-solid clr-i-solid-path-3 thrw0jg-j"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:objects-solid",
	});
}

export default Component;
