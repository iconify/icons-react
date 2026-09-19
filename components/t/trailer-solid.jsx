import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx_8uzbpx.css';
import '../../css/f/fgdlr4sbs.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 hx_8uzbpx"/><path class="clr-i-solid clr-i-solid-path-2 fgdlr4sbs"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:trailer-solid",
	});
}

export default Component;
