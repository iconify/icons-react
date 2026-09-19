import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bget78m-c.css';
import '../../css/n/nn2o84f1c.css';
import '../../css/m/mheuzxz4m.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bget78m-c clr-i-solid--badged clr-i-solid-path-1--badged"/><circle class="clr-i-solid--badged clr-i-solid-path-2--badged nn2o84f1c"/><path class="clr-i-solid--badged clr-i-solid-path-3--badged mheuzxz4m"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:shopping-cart-solid-badged",
	});
}

export default Component;
