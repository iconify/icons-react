import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bget78m-c.css';
import '../../css/n/nn2o84f1c.css';
import '../../css/l/l6qkspbqc.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bget78m-c clr-i-solid clr-i-solid-path-1"/><circle class="clr-i-solid clr-i-solid-path-2 nn2o84f1c"/><path class="clr-i-solid clr-i-solid-path-3 l6qkspbqc"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:shopping-cart-solid",
	});
}

export default Component;
