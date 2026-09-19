import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw8yjoqzh.css';
import '../../css/e/e5ia2_b7c.css';
import '../../css/s/sg34wcv_c.css';
import '../../css/b/bbcnl32jx.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 dw8yjoqzh"/><rect class="clr-i-solid clr-i-solid-path-2 e5ia2_b7c"/><rect class="clr-i-solid clr-i-solid-path-3 sg34wcv_c"/><rect class="bbcnl32jx clr-i-solid clr-i-solid-path-4"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:organization-solid",
	});
}

export default Component;
